var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var processExcelData = require('./model/processExcelData');

app.get('/notes', function (req, res) {
	res.json(processExcelData());
});

var server = app.listen(port, function () {
		console.log('server is up in running at http://localhost:' + server.address().port + '/notes');

	})
