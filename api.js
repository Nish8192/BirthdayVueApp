
const moment = require('moment');

module.exports = (app) => {
    app.get('/api', (req, res) => {
        return res.json({success: true, data: "API is running!"});
    })

    app.use('/api', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Content-Type', 'application/json');

        next();
    })

    app.post('/api/login', (req, res) => {

        console.log('Login body: ', req.body);
        let username = req.body.username,
            password = req.body.password;

        if (username === 'test@email.com' && password === 'test123') {
            req.session.user = username;
            return res.status(200).json({ success: true, data: req.body.credentials, message: 'Logged in successfully!' });
        } else if (username !== 'test@email.com') {
            return res.status(200).json({ success: false, data: req.body.credentials, message: 'Invalid username!' });
        } else {
            return res.status(200).json({ success: false, data: req.body.credentials, message: 'Invalid password!' });            
        }
    })

    app.get('/api/isLoggedIn', (req, res) => {
        if (req.session.user === 'test@email.com') {
            return res.status(200).json({success: true});
        } else {
            return res.status(200).json({success: false});
        }
    })

    app.post('/api/checkBirthday', (req, res) => {
        console.log(req.body.birthday)
        let birthday = moment(req.body.birthday, 'YYYY-MM-DD').format('dddd, MMMM Do, YYYY');
        console.log(birthday);

        let allergies = {
            apples: Math.random() >= 0.5 ? true : false,
            beans: Math.random() >= 0.5 ? true : false,
            bread: Math.random() >= 0.5 ? true : false,
            cheese: Math.random() >= 0.5 ? true : false,
            corn: Math.random() >= 0.5 ? true : false,
            lettuce: Math.random() >= 0.5 ? true : false,
            milk: Math.random() >= 0.5 ? true : false,
            salt: Math.random() >= 0.5 ? true : false,
            shrimp: Math.random() >= 0.5 ? true : false,
            sugar: Math.random() >= 0.5 ? true : false,
        };

        return res.status(200).json({success: true, allergies: allergies, birthday: birthday});
        

    })
}