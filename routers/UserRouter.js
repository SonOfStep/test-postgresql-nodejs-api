const { Router } = require("express");
const UserController = require("../controllers/UserController");

const UserRouter = new Router()

UserRouter.post('/users', UserController.create) // Create a new user
UserRouter.get('/users', UserController.getAll) // Get all users
UserRouter.get('/users/:id', UserController.getOnce) // Get a user by id
UserRouter.put('/users/:id', UserController.update) // Updated data in an existing user
UserRouter.delete('/users/:id', UserController.delete) // Delete a user

module.exports = UserRouter