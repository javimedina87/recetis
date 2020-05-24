const express = require('express');
const http = require('http');
const path = require('path');
const reload = require('reload');
// const bodyParser = require('body-parser');
// const logger = require('morgan');

const app = express();

const publicDir = path.join(__dirname, 'public'); // public directory

app.set('port', process.env.PORT || 3000);
// app.use(logger('dev')); // TODO estudiarlo
// app.use(bodyParser.json()); // parses json, multi-part (file), url-encoded

app.get('/', function (req, res) {
	res.sendFile(path.join(publicDir, 'index.html')); // start with index.thml
});

// Reload dependency code
reload(app).then(function () {
	http.createServer(app).listen(app.get('port'), function () {
		console.log('Server listening on port ' + app.get('port'));
	});
}).catch(function (err) {
	console.error('Reload could not start server', err);
});
