const {Song} = require('../models')
var request = require('request')

module.exports = {
    async show (req, res) {
        try {
            // const song = await Song.findById(req.params.songId)
            // res.send(song)
            var url = `http://jisho.org/api/v1/search/words?keyword=${req.params.searchString}`
            
            request({
                url: url,
                json: true
            }, function (error, response, body) {
            
                if (!error && response.statusCode === 200) {
                    console.log(body) // Print the json response
                    res.send(body)
                }
            })
            
        } catch (err) {
            res.status(500).send({
                error: 'Cant fetch word data'
            })
        }
    }
}