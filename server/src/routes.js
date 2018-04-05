const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const JapaneseDictonarySearchController = require('./controllers/JapaneseDictonarySearchController')
const VocabularyListController = require('./controllers/VocabularyListController')

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

    app.get('/vocabularylists',
        VocabularyListController.index)

    app.get('/getUserLists/:UserId',
        VocabularyListController.getUserLists)

    app.get('/vocabularylists/:vocabularyListId',
        VocabularyListController.show)

    app.post('/songs',
        SongsController.post)

    app.post('/register',
        // Express middleware
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        // Express middleware
        AuthenticationController.login)

    app.post('/vocabularylists',
        VocabularyListController.post)

    app.post('/addword',
        VocabularyListController.addWord)
}
