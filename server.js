const express = require('express');
const app = express();

// Heroku var to get a port number
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World from git push!');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});
