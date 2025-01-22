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

# Sample Image
![image](https://github.com/user-attachments/assets/fcb96827-55b8-4437-b93c-f953bbfd5c84)


# API EndPoints

## API Endpoints 📡  

| HTTP Method | Endpoint              | Description                         |
|-------------|-----------------------|-------------------------------------|
| GET         | `/api/v1/notes/`      | List all notes.                     |
| POST        | `/api/v1/notes/`      | Create a new note.                  |
| GET         | `/api/v1/notes/{id}/` | Retrieve a specific note by ID.     |
| PUT         | `/api/v1/notes/{id}/` | Update a specific note.             |
| DELETE      | `/api/v1/notes/{id}/` | Delete a specific note.             |



## Mixins Used 🔗  

The `NoteViewSet` class uses the following **mixins** to handle CRUD operations:

| Mixin                | Purpose                        |
|----------------------|--------------------------------|
| `ListModelMixin`     | Lists all notes               |
| `RetrieveModelMixin` | Retrieves a single note by ID |
| `CreateModelMixin`   | Creates new notes             |
| `UpdateModelMixin`   | Updates existing notes        |
| `DestroyModelMixin`  | Deletes notes                 |


# Backend Code 📂  

This backend is built with Django and uses Django REST framework to expose APIs for managing notes.  

---

## Views  

```python
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    RetrieveModelMixin,
    CreateModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(
    ListModelMixin,
    RetrieveModelMixin,
    CreateModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    GenericViewSet
):
    queryset = Note.objects.all().order_by('-updated')
    serializer_class = NoteSerializer

## Technology Stack 🛠️  

**Frontend:**  
- React  
- Nginx (as the web server)  

**Backend:**  
- Django REST Framework  

**Database:**  
- PostgreSQL  

**DevOps:**  
- Docker and Docker Compose  

---

## Contributing 🤝  

We welcome contributions! If you'd like to contribute, please follow these steps:  

1. **Fork** the repository.  
2. Create a **new feature branch**.  
   ```bash
   git checkout -b feature-name

