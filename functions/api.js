const express = require('express');
const cors = require('cors');
const DatabaseConfig = require('../dbConfig');
const bodyParser = require('body-parser');
const userRoute = require('../router');
const dotenv = require('dotenv').config().parsed;
const serverless = require('serverless-http');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
DatabaseConfig();

app.use('/.netlify/functions/api', userRoute);

app.listen(dotenv.Port, () => {
  console.log(`Server is running on http://localhost:${dotenv.Port}`);
});

module.exports.handler = serverless(app);