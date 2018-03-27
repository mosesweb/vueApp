const {VocabularyList} = require('../models')

module.exports = {
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