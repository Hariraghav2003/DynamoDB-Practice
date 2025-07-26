# 🚀 DynamoDB CRUD API with Node.js, Dynamoose, and Docker

A fully functional backend API built with **Node.js**, using **DynamoDB Local** via **Docker**, and **Dynamoose** as the ODM. The project follows a clean **MVC architecture**, supports environment-based configuration with `dotenv` and `cross-env`, and includes a Postman collection for testing.

---

## 📁 Project Structure

```
src/
└── backend/
    ├── config/                      # DynamoDB connection setup
    ├── controller/                  # Business logic
    ├── model/                       # Dynamoose schemas
    ├── routes/                      # API route definitions
    ├── Server.js                    # App entry point
    └── package.json                 # Scripts and dependencies
docker-compose.yml                  # Local DynamoDB container
Dynamo DB.postman_collection.json   # API tests
README.md                           # Project documentation
```

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js v18 or higher
- Docker & Docker Compose
- Postman (for API testing)

---

### 🔧 Installation

```bash
git clone https://github.com/your-username/dynamo-db.git
cd dynamo-db/src
docker-compose up --build -d
cd backend
npm install
```

---

### 📝 Running Modes

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm run prod
```

> `cross-env` sets `IS_OFFLINE=true` in dev mode to enable local DynamoDB.

---

## 📬 API Endpoints

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| GET    | `/users`     | Get all users     |
| POST   | `/users`     | Create new user   |
| GET    | `/users/:id` | Get user by ID    |
| PUT    | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

---

## 🛠 Technologies Used

- **Node.js**
- **Express.js**
- **Dynamoose** – ODM for DynamoDB
- **Amazon DynamoDB Local** – via Docker
- **Docker / Docker Compose**
- **dotenv** / **cross-env** – Env configuration
- **Postman** – API testing
- **MVC Pattern** – Modular architecture

---

> ✅ Ready to go with Docker, structured cleanly for expansion and production use.
