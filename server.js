const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;

require("dotenv").config();

const tidalApiToken = process.env.TIDAL_API_TOKEN;

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

const axios = require('axios');

const getTrackInfo = async () => {
    try {
        const response = await axios.get('https://api.tidal.com/v1/tracks/251380837?countryCode=US', {
            headers: {
                'X-Tidal-Token': tidalApiToken
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching track information:', error.response ? error.response.data : error.message);
    }
};

getTrackInfo();

http.listen(port, () => {
    console.log('Running on Port: ' + port);
});