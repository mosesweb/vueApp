const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch songs'
            })
        }
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
            console.log('create....................')
        } catch (err) {
            res.status(500).send({
                error: 'Can error occured cant create song.'
            })
        }
    }
}