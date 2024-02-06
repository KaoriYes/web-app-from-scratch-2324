const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

http.listen(port, () => {
    console.log('Running on Port: ' + port);
});