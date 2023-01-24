const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const userroutes = require('./routes/userroutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
app.use('/api', userroutes);
module.exports = app;

