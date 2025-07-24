const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()


const indexRouter = require('./routes/index.js')

const PORT = process.env.PORT || '3000'
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USERNAME = process.env.DB_USERNAME
const mongoDB = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.bkg1k.mongodb.net/quotesdatabase?retryWrites=true&w=majority&appName=Cluster0`

const corsOptions = {
    origin: 'http://localhost:5173', // Specify the allowed origin
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
    credentials: true, // Allow credentials (cookies, authentication)
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.set('strictQuery', false)

main().catch(err => console.log(err))

async function main() {
    console.log("Debug: About to connect")
    await mongoose.connect(mongoDB)
    console.log("Debug: Should be connected?");

}

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`Server running at Port: ${PORT}`)
})

