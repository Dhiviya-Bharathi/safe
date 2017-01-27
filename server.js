var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('./sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('./sslcert/server.crt', 'utf8');

var credentials = {
    key: privateKey,
    cert: certificate,
    requestCert: false,
    rejectUnauthorized: false
};
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// your express configuration here

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443, function() {
    console.log("https server started in port 8443")
});
