# 🎬 Streaming Service Backend (NestJS + MongoDB)

[![NestJS]](https://nestjs.com/)
[![Node.js]](https://nodejs.org/)
[![MongoDB]](https://www.mongodb.com/)
[![License: MIT]](LICENSE)

> Backend service for streaming built using **NestJS** and **MongoDB**.  
> Designed to be modular, scalable, and production-like — primarily created as part of my backend architecture learning and interview prep.

---

## 🚀 Overview

This project implements the backend foundation of a streaming platform.  
The key implemented feature for now is **“My List”** — where users can save their favourite movies and TV shows.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [NestJS](https://nestjs.com/) |
| Language | TypeScript (Node.js) |
| Database | MongoDB (Mongoose ORM) |
| Validation | class-validator / class-transformer |
| Config & Env | @nestjs/config + Joi |
| Error Handling | Centralized Exception Filter |
| Middleware | Custom Auth Middleware |
| Testing | Jest + Supertest (optional) |

---

## 🗂️ Project Structure

src/
│
├── controllers/
│ └── my-list.controller/
│ ├── my-list.controller.ts
│ ├── my-list.service.ts
│ └── my-list.module.ts
│
├── shared/
│ ├── clients/ -> DB / external clients
│ ├── dtos/ -> DTOs for request validation
│ ├── errors/ -> Centralized exception filters
│ ├── middleware/ -> Auth / logging middleware
│ ├── modules/config.shared/ -> Config & env setup
│ ├── schemas/ -> Mongoose schemas (User, Movie, MyList)
│ └── services/ -> Shared logic & base services
│
├── app.module.ts
└── main.ts


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/streaming_service.git
cd streaming_service


Install Dependencies
npm install

Add environment variables
MONGO_URI=
PORT=
SERVICE_NAME=Backend service for streaming service
HOST=localhost

Start the project

npm run start:dev

Example Request

POST /api/my-list/add
{
  "userId": "674d1234b5f9a8cde9012345",
  "contentId": "674d5678a5f9a8cde9016789",
  "type": "Movie"
}







