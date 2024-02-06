const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;

require("dotenv").config();

const tidalApiToken = process.env.TIDAL_API_TOKEN;
const tidalClientId = process.env.TIDAL_CLIENT_ID;
const tidalClientSecret = process.env.TIDAL_CLIENT_SECRET;

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

const axios = require('axios');


const b64creds = Buffer.from(`${tidalClientId}:${tidalClientSecret}`).toString('base64');

axios.post('https://auth.tidal.com/v1/oauth2/token', {
    grant_type: 'client_credentials'
}, {
    headers: {
        'Authorization': `Basic ${b64creds}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });

// const getTrackInfo = async () => {
//     try {
//         const response = await axios.get('https://api.tidal.com/v1/tracks/251380837?countryCode=US', {
//             headers: {
//                 'X-Tidal-Token': tidalApiToken
//             }
//         });
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error fetching track information:', error.response ? error.response.data : error.message);
//     }
// };
//
// getTrackInfo();

http.listen(port, () => {
    console.log('Running on Port: ' + port);
});