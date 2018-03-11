module.exports = (app) =>
{
    app.get('/status', (req, res) => {
        res.send({
            message: 'hello world!!'
        })
    })
    app.post('/register', (req, res) => {
    
        res.send({
            message: req.body.email + '! Hello. Your user was registered! have fun'
        })
    })
}
