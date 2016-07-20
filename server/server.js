var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client'))

app.listen(port, function() {
	console.log('Server is listening on port ' + port);
})
