
module.exports = (app) => {
    app.get('/api', (req, res) => {
        return res.json({success: true, data: "API is running!"})
    })

    app.post('/api/login', (req, res) => {
        console.log(req.body);
        
        return res.json({ success: true, data: req.body.credentials })
    })
}