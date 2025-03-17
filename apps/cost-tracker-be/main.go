package main

import (
	"fmt"
	"net/http"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	fmt.Println(Hello("cost-tracker-be"))

	http.ListenAndServe(":8080", nil)
}
