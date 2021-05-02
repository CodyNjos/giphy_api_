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

// Request used to get rated gifs
router.get('/rated', (req, res) => {
    const query = 
    `SELECT * 
    FROM "rated"
    WHERE "user_id" = $1`
    pool.query(query, [req.body.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
    }).catch(err => {
        console.log('Error getting rated gifs', err.response)
        res.send(500);
    });
  });
  module.exports = router