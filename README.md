# Node.js gRPC Example with Express & Docker

## Prerequisites
- Ensure Docker is installed on your system

## Getting Started

### 1. Build and Run the Application
Use the following command to build and start the services:

```sh
docker-compose build --no-cache && docker-compose up --remove-orphans
```

This will:
- Build the Docker containers without using cache
- Start all the necessary services defined in `docker-compose.yml`

---

## API Endpoints

### 1. Add a User
- **Endpoint:** `POST http://localhost:3005/users/`
- **Request Type:** JSON (Raw)
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
- **Response Example:**
```json
{
  "id": "12345",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### 2. Get User Details by ID
- **Endpoint:** `GET http://localhost:3005/users/{userId}`
- **Example Request:**
```sh
curl -X GET http://localhost:3005/users/12345
```
- **Response Example:**
```json
{
  "id": "12345",
  "name": "John Doe",
  "email": "john@example.com"
}
```


---


## License
This project is open-source under the [MIT License](LICENSE).
