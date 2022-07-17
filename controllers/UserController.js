const UserService = require("../services/UserService")

class UserController {
    // Create a new user
    async create(req, res) {
        const user = req.body
        console.log(user)
        try {
            const newUser = await UserService.create(user)
            res.json({ user: newUser })
        } catch (error) {
            res.status(500).json({ mes: error })
        }
    }

    // Get all users
    async getAll(req, res) {
        try {
            const listUsers = await UserService.getAll()
            res.json({ users: listUsers })
        } catch (error) {
            res.status(500).json({ mes: error })
        }
    }

    // Get a user
    async getOnce(req, res) {
        const id = parseInt(req.params.id)
        try {
            const user = await UserService.getOnce(id)
            res.json({ user })
        } catch (error) {
            res.status(500).json({ mes: error })
        }
    }

    // Updated data in an existing user
    async update(req, res) {
        const { name, email } = req.body;
        const id = parseInt(req.params.id)
        try {
            const updatedUser = await UserService.update({ name, email, id })
            res.json({ user: updatedUser })
        } catch (error) {
            res.status(500).json({ mes: error })
        }
    }

    // Delete a user by id
    async delete(req, res) {
        const id = parseInt(req.params.id)
        try {
            const removedUser = await UserService.delete(id)
            res.json({ user: removedUser })
        } catch (error) {
            res.status(500).json({ mes: error })
        }
    }
}

module.exports = new UserController()