var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    root = __dirname,
    port = process.env.PORT || 8081,
    app = express();



app.use(express.static(path.join(__dirname, 'node_modules')));

var http = require('http').Server(app);
// var https = require('https').createServer(options, app);

// app.use(express.static('public'));

app.use(bp.json({ limit: '700mb' }));
app.use(bp.urlencoded({
    extended: true,
    limit: '700mb',
    parameterLimit: 1000000
}));


require('./api.js')(app)

app.set('port', (process.env.PORT || 8081));

http.listen(app.get('port'), function () {
    console.log('Server running on: ' + app.get('port'));
    console.log(`The root directory is: ${root}`);


});

// https.listen(8443);

