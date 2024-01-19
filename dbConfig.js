const mongoose = require('mongoose')
const dotenv = require('dotenv').config().parsed

function DatabaseConfig() {
    // Connect to MongoDB
    mongoose.connect(dotenv.Mongoose_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    db.once('open', () => {
        console.log('Connected to the MongoDB database')
    })
}

module.exports = DatabaseConfig
