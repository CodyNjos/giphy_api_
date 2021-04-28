const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/search/:search', (req, res) => {
 
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.search}&limit=50`
    axios.get(GIPHY_URL).then(response => {
        res.status(200).send(response.data);
    }).catch(err => {
        console.log('Error getting gif', err.response)
        res.send(500);
    });
  });

  module.exports = router