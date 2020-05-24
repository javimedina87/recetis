const express = require('express');
const path = require('path');
const app = express();

// Heroku var to get a port number
const PORT = process.env.PORT || 5000

// CSS
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function () {
    console.log('Example app listening on port: ', PORT);
});
