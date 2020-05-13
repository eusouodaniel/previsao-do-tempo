const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();
server.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

server.listen(PORT)