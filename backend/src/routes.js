const express = require('express');
const routes = express.Router();

const auth = require('./middleware/ensureAuthenticated');

const ProjectController = require('./controllers/ProjectController');
const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');

// Projects (CRUD)
routes.post('/projects', auth, ProjectController.createProject);
routes.get('/projects', auth, ProjectController.readAllProjects);
routes.put('/projects/:id', auth, ProjectController.updateProject);
routes.delete('/projects/:id', auth, ProjectController.deleteProject);

// Tasks (CRUD)
routes.post('/tasks', auth, TaskController.createTask);
routes.get('/tasks', auth, TaskController.readAllTasks);
routes.get('/tasks/:id', auth, TaskController.readProjectTasks);
routes.put('/tasks/:id', auth, TaskController.updateTask);
routes.delete('/tasks/:id', auth, TaskController.deleteTask);

// Users (Create and login)
routes.post('/register', UserController.createUser);
routes.post('/login', UserController.login);

module.exports = routes;
