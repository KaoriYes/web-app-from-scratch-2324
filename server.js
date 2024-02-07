const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;

require("dotenv").config();

// const tidalApiToken = process.env.TIDAL_API_TOKEN;
const tidalClientId = process.env.TIDAL_CLIENT_ID;
const tidalClientSecret = process.env.TIDAL_CLIENT_SECRET;
const accessToken = process.env.TIDAL_ACCES_TOKEN;

app.use(express.static('public'));


app.set('view engine', 'ejs');


const axios = require('axios');


// const b64creds = Buffer.from(`${tidalClientId}:${tidalClientSecret}`).toString('base64');

// axios.post( 'https://auth.tidal.com/v1/oauth2/token', {
//     grant_type: 'client_credentials'
// }, {
//     headers: {
//         'Authorization': `Basic ${b64creds}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     form: {
//         grant_type: 'client_credentials'
//     },
//     json: true
// })
//     .then(response => {
//         console.log('test')
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error.response ? error.response.data : error.message);
//     });



var tidalInfo = '';
axios.get('https://openapi.tidal.com/albums/59727856?countryCode=US', {
    headers: {
        'accept': 'application/vnd.tidal.v1+json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.tidal.v1+json'
    }
})
    .then(response => {
        // console.log(response.data);
        tidalInfo = response.data.resource;
        // console.log(tidalInfo);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
app.get('/', (req, res) => {
    console.log(tidalInfo);
    res.render('index', { tidalInfo });
});


http.listen(port, () => {
    console.log('Running on Port: ' + port);
});