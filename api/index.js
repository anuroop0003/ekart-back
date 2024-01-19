const express = require('express')
const app = express()
const cors = require('cors')
const DatabaseConfig = require('../dbConfig')
const bodyParser = require('body-parser')
const userRoute = require('../router')
const dotenv = require('dotenv').config().parsed

app.use(cors()) // Use the cors middleware
app.use(bodyParser.json()) // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded data
DatabaseConfig() //DB Config

app.use('/api', userRoute) //Routers

app.listen(dotenv.Port, () => {
    console.log(`Server is running on http://localhost:${dotenv.Port}`)
})
