const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const queryText = `INSERT INTO "user" (username, password)
      VALUES ($1, $2) RETURNING id`;
    pool
      .query(queryText, [username, password])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
      });
  });

  module.exports = router