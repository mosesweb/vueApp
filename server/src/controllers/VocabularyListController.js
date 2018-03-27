const {VocabularyList} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const VocabularyLists = await VocabularyList.findAll({
                limit: 10
            })
            res.send(VocabularyLists)
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch VocabularyLists'
            })
        }
    },
    async show (req, res) {
        try {
            const VocabularyList = await VocabularyList.findById(req.params.VocabularyListId)
            res.send(VocabularyList)
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch VocabularyList'
            })
        }
    },
    async post (req, res) {
        try {
            const VocabularyList = await VocabularyList.create(req.body)
            res.send(VocabularyList)
        } catch (err) {
            res.status(500).send({
                error: err + ' Can error occured cant create VocabularyList.'
            })
        }
    }
}