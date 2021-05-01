const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const gifRouter = require('./routes/giphy.router');
const userRouter = require('./routes/user.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/gif', gifRouter);
app.use('/api/user', userRouter)


// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
