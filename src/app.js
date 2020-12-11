const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');

// settings
app.set('port', 4000);
// app.use(express.bodyParser());

// middlewares
app.use(cors());
// routes

// route for users
app.use('/api/users', require('../routes/users'));

// route for notes
app.use('/api/notes', require('../routes/notes'));
module.exports = app;