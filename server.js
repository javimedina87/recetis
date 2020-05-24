const express = require('express');
const app = express();

// Heroku var to get a port number
const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
    res.send('Hello World from npm start!');
});

app.listen(PORT, function () {
    console.log('Example app listening on port: ', PORT);
});
