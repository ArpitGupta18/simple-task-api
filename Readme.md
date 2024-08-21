# Simple Task API

The Simple Task API is a RESTful service that allows users to manage their tasks. It supports creating, retrieving, updating, and deleting tasks. The tasks are stored in local JSON file for persistence, and various middleware functions are used for validating input and handling errors.

## How to run

1.  Navigate to the main directory and open terminal

2.  Write the following commands

        npm install express cors nodemon

3.  Then to run the project

        npm run dev

## API Endpoints

-   Get Tasks: /api/tasks
-   Get a task: /api/tasks/:id
-   Add task: /api/tasks
-   Update task: /api/tasks/:id
-   Partial update task: /api/tasks/:id
-   Delete a task: /api/tasks/:id

## Postman URL

In order to add, update, and partially update a task, you need to pass data through the request body to make changes.

### Get tasks

    GET | http://localhost:3000/api/tasks

### Get a task by id

    GET | http://localhost:3000/api/tasks/1

### Add a task

    POST | http://localhost:3000/api/task

### Update a task

    PUT | http://localhost:3000/api/task/1

### Partially update a task

    PATCH | http://localhost:3000/api/task/1

### Delete a note

    DELETE | http://localhost:3000/api/task/1
