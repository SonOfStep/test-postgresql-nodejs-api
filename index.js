const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const UserRouter = require('./routers/UserRouter')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use('/api', UserRouter)

app.get('/', (req, res) => {
    res.json({mes: '✨ Node.js, Express and PostgreSQL API ✨'})
})

app.listen(PORT, () => {console.log(`App running on port ${PORT}`)})