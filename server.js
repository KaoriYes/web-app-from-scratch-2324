const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;
// const { marked } = require('marked');
// const fs = require('fs');



require("dotenv").config();


const accessToken = process.env.TIDAL_ACCES_TOKEN;

app.use(express.static('public'));


app.set('view engine', 'ejs');


// cc


let tidalID = "76331728";
//
// const tidalIDS = ["123591955", "260579298", "271240948", "174448504", "307603174", "662795", "149575174", "245042535", "655910", "2178485", "272254582", "286130505", "109485854", "286130505" ]
//
// function randomizeTidalID() {
//     const randomIndex = Math.floor(Math.random() * tidalIDS.length);
//     tidalID = tidalIDS[randomIndex];
//     console.log(tidalID);
// }
//
// randomizeTidalID();
//
// setInterval(randomizeTidalID, 1000);







// console.log(tidalID);

let tidalInfo = '';
let tidalAlbum = '';
let tidalArtist = '';


fetch(`https://openapi.tidal.com/albums/${tidalID}?countryCode=US`, {
    method: 'GET',
    headers: {
        'accept': 'application/vnd.tidal.v1+json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.tidal.v1+json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        tidalInfo = data.resource;
        // console.log(tidalInfo);
        tidalInfo?.artists.forEach(artist => {
            tidalArtist = artist;
        })})
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    })


fetch(`https://openapi.tidal.com/albums/${tidalID}/items?countryCode=US&offset=0`, {
    method: 'GET',
    headers: {
        'accept': 'application/vnd.tidal.v1+json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/vnd.tidal.v1+json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        tidalAlbum = data;
        // console.log(tidalAlbum.data[1].id);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });



app.get('/', (req, res) => {
    res.render('index', { tidalInfo, tidalArtist, tidalAlbum });
});


// fs.readFile('readme.md', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//
//     // Convert Markdown to HTML
//     const html = marked(data);
//
//     // Manipulate the HTML content
//     const modifiedHTML = html;
//
//     // Log the modified HTML content
//     console.log(modifiedHTML);
// });



//
// app.get('/api/:slug', (req) => {
//     res.send
// })
http.listen(port, () => {
    console.log('Running on Port: ' + port);
});