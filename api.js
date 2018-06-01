
const moment = require('moment');

module.exports = (app) => {
    app.get('/api', (req, res) => {
        return res.json({success: true, data: "API is running!"});
    })

    app.post('/api/login', (req, res) => {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Content-Type', 'application/json');

        console.log('Login body: ', req.body);
        let username = req.body.username,
            password = req.body.password;

        if (username === 'test@email.com' && password === 'TestP@SS1') {
            return res.status(200).json({ success: true, data: req.body.credentials, message: 'Logged in successfully!' });
        } else if (username !== 'test@email.com') {
            return res.status(500).json({ success: false, data: req.body.credentials, message: 'Invalid username!' });
        } else {
            return res.status(500).json({ success: false, data: req.body.credentials, message: 'Invalid password!' });            
        }
    })

    app.post('/api/checkBirthday', (req, res) => {

    })
}