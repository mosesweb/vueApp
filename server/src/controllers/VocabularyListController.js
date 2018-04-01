const {VocabularyList} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            if(req.params.UserId != null) {
                console.log('userid..')
                const vocabularylists = await VocabularyList.findAll({
                    limit: 10,
                    where: {
                        UserId: req.params.UserId
                    }
                })
                res.send(vocabularylists)
            }
            else {
                console.log('not userid..')
                const vocabularylists = await VocabularyList.findAll({
                    limit: 10
                })
                res.send(vocabularylists)
            }
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch vocabularylists'
            })
        }
    },
    async getUserLists (req, res) {
        try {
            const vocabularylists = await VocabularyList.findAll({
                limit: 10,
                where: {
                    UserId: req.params.UserId // this.$store.state.user.id
                }
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