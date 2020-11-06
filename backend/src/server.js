const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/codechallenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(3333);
