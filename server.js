const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const port = 1337;

const methodOverride = require('method-override');
const multer = require('multer');
const upload = multer({
    dest: 'public/uploads/',
});

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

http.listen(port, () => {
    console.log('Running on Port: ' + port);
});