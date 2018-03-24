const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const JapaneseDictonarySearchController = require('./controllers/JapaneseDictonarySearchController')

module.exports = (app) =>
{
    app.get('/status', (req, res) => {
        res.send({
            message: 'hello world!!'
        })
    })
    app.get('/songs',
        SongsController.index)
    
    app.get('/songs/:songId',
        SongsController.show)

    app.get('/getJishoSearchResult/:searchString',
        JapaneseDictonarySearchController.show)

    app.post('/songs',
        SongsController.post)
    
    app.post('/register',
        // Express middleware
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        // Express middleware
        AuthenticationController.login)
}
