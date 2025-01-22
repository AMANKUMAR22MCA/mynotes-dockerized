# Notes Application 📒  

A simple yet powerful Notes application built with **React** (Frontend), **Django** (Backend), and **PostgreSQL** (Database), fully containerized using **Docker** for seamless deployment.

---

## Features ✨

- Create, read, update, and delete notes effortlessly (CRUD functionality).
- Real-time data updates using a modern REST API.
- Fully containerized architecture ensuring modularity and portability.
- Secure and efficient backend powered by Django.
- Scalable database with PostgreSQL for data management.

---

## Architecture 🏗️

**Frontend (React)** ➡️ **Backend (Django)** ➡️ **Database (PostgreSQL)**  

1. **Frontend (React)**:  
   The user interacts with the application through the React-based frontend. HTTP requests are made to the backend API for data operations.

2. **Backend (Django)**:  
   The Django backend receives requests from the React frontend, processes them, interacts with the PostgreSQL database, and returns appropriate responses.

3. **Database (PostgreSQL)**:  
   PostgreSQL stores all notes data, ensuring reliability and scalability for data operations.

4. **Dockerized Setup**:  
   All components (frontend, backend, and database) are containerized using Docker, and communication happens within a shared Docker network.

---

## Installation and Setup ⚙️  

Follow these steps to get the application running locally:

### Prerequisites:
- Docker and Docker Compose installed on your machine.
- Node.js and Python installed (optional for manual setup).

### Steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
# Folder Structure
![image](https://github.com/user-attachments/assets/66c95c0e-83a9-40f1-a428-4be86d95217d)



# API EndPoints

## API Endpoints 📡  

| HTTP Method | Endpoint              | Description                         |
|-------------|-----------------------|-------------------------------------|
| GET         | `/api/v1/notes/`      | List all notes.                     |
| POST        | `/api/v1/notes/`      | Create a new note.                  |
| GET         | `/api/v1/notes/{id}/` | Retrieve a specific note by ID.     |
| PUT         | `/api/v1/notes/{id}/` | Update a specific note.             |
| DELETE      | `/api/v1/notes/{id}/` | Delete a specific note.             |

