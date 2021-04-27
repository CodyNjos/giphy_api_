const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const gifRouter = require('./routes/giphy.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/gif', gifRouter);


// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
