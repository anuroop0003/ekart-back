const express = require('express');
const app = express();
const cors = require('cors');
const DatabaseConfig = require('../dbConfig');
const bodyParser = require('body-parser');
const userRoute = require('../router');
const dotenv = require('dotenv').config().parsed;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
DatabaseConfig();

app.use('/api', userRoute);

app.listen(dotenv.Port, () => {
  console.log(`Server is running on http://localhost:${dotenv.Port}`);
});
