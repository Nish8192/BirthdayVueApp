var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    root = __dirname,
    port = process.env.PORT || 8081,
    app = express(),
    expressSession = require('express-session');


app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(expressSession({
    secret: "Th!s!s@ToughP@$$w0rd",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 7200000
    }
}));

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

app.use( (req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "");
    // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');

    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');

    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json');

    // res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
});

http.listen(app.get('port'), function () {
    console.log('Server running on: ' + app.get('port'));
    console.log(`The root directory is: ${root}`);


});

// https.listen(8443);

