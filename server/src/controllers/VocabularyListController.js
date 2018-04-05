const {VocabularyList, Word} = require('../models')

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
                limit: 100,
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
            const vocabularylists = await VocabularyList.findById(
                req.params.vocabularyListId, {
                    include: {
                        model: Word
                    }
                })
            try {
                console.log('this...................')
                const listtest = await Word.findById(1, {
                    include: { model: VocabularyList }
                })
                const listtest2 = await VocabularyList.findById(1, {
                    include: { model: Word }
                })
                console.log(listtest2)
            }
            catch (e) {
                console.log(e)
            }
            
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
    },
    async addWord (req, res) {
        console.log(req.body)
        try {
            const word = await Word.create({ japanese: req.body.word, hiragana: 'sup', romaji: 'asd', translation: 'translation..', VocabularyListId: req.body.listId})
            res.send(word)
        } catch (err) {
            res.status(500).send({
                error: err + ' Can error occured cant create a Word.'
            })
        }
    }
}