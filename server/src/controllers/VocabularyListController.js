const {VocabularyList} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const vocabularylists = await VocabularyList.findAll({
                limit: 10
            })
            res.send(vocabularylists)
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch vocabularylists'
            })
        }
    },
    async show (req, res) {
        try {
            console.log('trying...')
            const vocabularylists = await VocabularyList.findById(req.params.vocabularyListId)
            res.send(vocabularylists)
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch vocabularylists'
            })
        }
    },
    async post (req, res) {
        try {
            const vocabularyList = await VocabularyList.create(req.body)
            res.send(vocabularyList)
        } catch (err) {
            res.status(500).send({
                error: err + ' Can error occured cant create VocabularyList.'
            })
        }
    }
}