# Hotel Management System

This is a hotel management system that allows you to manage hotel rooms and bookings.

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Running the Project Locally](#running-the-project-locally)
- [Database Migrations](#database-migrations)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)

---

## Description

The Hotel Management System is a backend application built with **NestJS** and **PostgreSQL**. It provides endpoints to manage hotel rooms and bookings, including checking room availability for specific dates.

---

## Requirements

Before running the project, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Docker (optional, for running PostgreSQL locally)

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo-url.git
cd your-repo-folder
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
NODE_ENV=development
```

> **Note:** Replace the values with your actual database credentials.

### 4. Run the Application

Start the application in development mode:

```bash
npm run start:dev
# or
yarn start:dev
```

The server will start on `http://localhost:3000`.

---

## Database Migrations

### 1. Running Migrations

To apply database migrations, use the following command:

```bash
npx sequelize-cli db:migrate
```

This will create the necessary tables in your database.

### 2. Undoing Migrations

If you need to undo the last migration, use:

```bash
npx sequelize-cli db:migrate:undo
```

---

## Environment Variables

The application uses the following environment variables:

| Variable       | Description                          | Example Value                     |
|----------------|--------------------------------------|-----------------------------------|
| `DB_HOST`      | Database host address               | `localhost`                      |
| `DB_PORT`      | Database port                       | `5432`                           |
| `DB_USERNAME`  | Database username                   | `postgres`                       |
| `DB_PASSWORD`  | Database password                   | `your_password`                  |
| `DB_NAME`      | Database name                       | `hotel_db`                       |
| `NODE_ENV`     | Application environment             | `development`, `test`, `production` |

> **Important:** Ensure that the `.env` file is not committed to version control (e.g., add it to `.gitignore`).

---

## API Documentation

The API documentation is available at:

```
http://localhost:3000/api
```

You can use tools like **Swagger** to explore and test the endpoints.

---

## Additional Notes

- The application uses **Sequelize** as the ORM for database interactions.
- Ensure that your PostgreSQL server is running before starting the application.
- If you encounter any issues, check the logs for detailed error messages.

---