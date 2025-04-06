package main

import (
	"context"
	"cost-tracker/database"
	"cost-tracker/users"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	conn := database.ConnectDatabase()
	defer conn.Close(context.Background())

	database.CreateUsersTable()

	database.InsertUser(users.User{
		Id:       999,
		Name:     "Remo",
		Email:    "remo@mail.com",
		IsActive: true,
	})

	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/users", users.GetUsersAPI)
	err := router.Run(":8080")
	if err != nil {
		return
	}
}
