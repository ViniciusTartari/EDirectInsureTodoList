const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const morgan = require('morgan');

const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/codechallenge';

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log('MongoDB connected.');
    }
  },
);

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
