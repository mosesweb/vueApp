const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(req.body, schema)
        if(error) {
            switch(error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'you must require a valid email adress'
                })
                break
            case 'password':
                res.status(400).send({
                    error: `the password provided failed to match the following rules
                    <br>
                    it must contain only the following characters: lower case, upper case, <br>must be at least 8 characters length and max 32 characters.`
                })
                break
            default: 
                res.status(400).send({
                    error: 'Invalid registration information'
                })
            }
        } else {
            next()
        }

    }
}