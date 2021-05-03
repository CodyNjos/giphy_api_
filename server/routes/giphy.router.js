const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
const router = express.Router();


// Request used to search gifs through the giphy API
router.get('/search/:search', (req, res) => {
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.search}&limit=50`
    axios.get(GIPHY_URL).then(response => {
        res.status(200).send(response.data);
    }).catch(err => {
        console.log('Error searching gifs', err.response)
        res.send(500);
    });
  });

// Request used to rate gifs
router.post('/rate', (req, res) => {
    const gifUrl = req.body.url
    const userId = req.body.id
    const rating = req.body.rating
    console.log(rating, userId, gifUrl)
    const queryText = 
    `INSERT INTO "rated" ("url", "user_id", "rating") 
    VALUES ($1, $2, $3);`;
  
    pool.query(queryText, [gifUrl, userId, rating]).then(() => {
      console.log('Rating added successfully');
      res.sendStatus(201);
    }).catch(err => {
      console.log('Error in rating', err);
      res.sendStatus(500);
    });
  });

// Request used to update gif rating
router.put('/updateRating', (req, res) => { 
    const gifId = req.body.id;
    const newRating = req.body.rating;
    
    const queryText = `
        UPDATE "rated" 
        SET "rating" = $1
        WHERE "id" = $2;`;

    pool.query(queryText, [newRating, gifId]).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      console.log('Error in update', err);
      res.sendStatus(500);
    });
  });

// Request used to get rated gifs
router.get('/rated/:id', (req, res) => {

    const query = 
    `SELECT * 
    FROM "rated"
    WHERE "user_id" = $1`

    pool.query(query, [req.params.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
    }).catch(err => {
        console.log('Error getting rated gifs', err.response)
        res.send(500);
    });
  });

// Request used to filter rated gifs by rating

router.get('/ratedByRating/:id/:rating', (req, res) => {

  const query = 
  `SELECT * 
  FROM "rated"
  WHERE "user_id" = $1
  AND "rating" = $2`

  pool.query(query, [req.params.id, req.params.rating])
      .then(result => {
          console.log(result.rows)
          res.send(result.rows)
  }).catch(err => {
      console.log('Error getting rated gifs', err.response)
      res.send(500);
  });
});

// Request used to remove rated gifs
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    const queryText = 
    `DELETE FROM "rated" 
    WHERE "id" = $1;`;
  
    pool.query(queryText, [id]).then(() => {
      res.sendStatus(204);
    }).catch(err => {
      console.log('Error in delete', err);
      res.sendStatus(500);
    });
  });
  module.exports = router