package database

import (
	"context"
	"cost-tracker/users"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

var connection *pgx.Conn

func ConnectDatabase() *pgx.Conn {
	err := godotenv.Load("../../backend.env")

	if err != nil {
		log.Fatal("Env file has not been found")
	}

	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbSslMode := os.Getenv("DB_SSLMODE")

	connStr := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=%s", dbUser, dbPassword, dbHost, dbPort, dbName, dbSslMode)

	conn, err := pgx.Connect(context.Background(), connStr)

	if err != nil {
		log.Fatal("Cannot connect to the database")
	}

	connection = conn

	return connection
}

func CreateUsersTable() {
	createTableSQL := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		is_active BOOLEAN DEFAULT false
	);
	`

	_, err := connection.Exec(context.Background(), createTableSQL)

	if err != nil {
		log.Fatalf("Error during table creation: %v", err)
	}

	fmt.Println("Table users has been created successfully.")
}

func InsertUser(user users.User) {
	ct, err := connection.Exec(context.Background(),
		"INSERT INTO users (name, email, is_active) VALUES ($1, $2, $3)",
		user.Name, user.Email, user.IsActive,
	)
	if err != nil {
		log.Fatal(err)
	}

	rowsAffected := ct.RowsAffected()
	fmt.Printf("Affected %d row(s).\n", rowsAffected)
}
