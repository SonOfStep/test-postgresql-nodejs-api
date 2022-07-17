const DB = require('../pgconnection.js')

class UserService {
    async create(user) {
        const { name, email } = user
        const newUser = await DB
            .connect()
            .then(client => {
                return client
                    .query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email])
                    .then(res => {
                        client.release()
                        return (res.rows[0])
                    })
                    .catch(err => {
                        client.release()
                        throw new Error(err.stack)
                    })
            })

        return newUser
    }
    async getAll() {
        const listUsers = await DB
            .connect()
            .then(client => {
                return client
                    .query('SELECT * FROM users')
                    .then(res => {
                        client.release()
                        return (res.rows)
                    })
                    .catch(err => {
                        client.release()
                        throw new Error(err.stack)
                    })
            })
        return listUsers
    }

    async getOnce(id) {
        const user = await DB
            .connect()
            .then(client => {
                return client
                    .query('SELECT * FROM users WHERE id = $1', [id])
                    .then(res => {
                        client.release()
                        return res.rows[0]
                    })
                    .catch(err => {
                        client.release()
                        throw new Error(err.stack)
                    })
            })

        return user
    }

    async update(user) {
        const { name, email, id } = user;

        const updatedUser = await DB
            .connect()
            .then(client => {
                return client
                    .query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;', [name, email, id])
                    .then(res => {
                        client.release();
                        return res.rows[0]
                    })
                    .catch(err => {
                        client.release()
                        throw new Error(err.stack)
                    })
            })
        return updatedUser
    }

    async delete(id) {
        const removedUser = await DB
            .connect()
            .then(client => {
                return client
                    .query('DELETE FROM users WHERE id = $1 RETURNING *;', [id])
                    .then(res => {
                        client.release()
                        return res.rows[0]
                    }).catch(err => {
                        client.release()
                        throw new Error(err.stack)
                    })
            })
        return removedUser
    }
}

module.exports = new UserService()