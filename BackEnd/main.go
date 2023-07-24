package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Server is running on http://localhost:8000")
	http.HandleFunc("/api/endpoint", handler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	fmt.Println("Received a request to /api/endpoint")
	fmt.Fprint(w, "Hello from Go backend!")
}
