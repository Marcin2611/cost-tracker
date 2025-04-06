package users

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type User struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	IsActive bool   `json:"isActive"`
}

var users = []User{
	{Id: 1, Name: "Alice", Email: "alice@example.com", IsActive: true},
	{Id: 2, Name: "John", Email: "john@example.com", IsActive: false},
	{Id: 3, Name: "Steven", Email: "steven@example.com", IsActive: true},
}

func GetUsers() []User {
	return users
}

func AddUser(user User) []User {
	users = append(users, user)

	return users
}

func GetUsersAPI(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

//func GetUserByID(c *gin.Context) {
//  id, _ := strconv.Atoi(c.Param("id"))
//}
