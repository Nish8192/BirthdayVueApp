
module.exports = (app) => {
    app.get('/api', (req, res) => {
        return res.json({success: true, data: "API is running!"})
    })
}