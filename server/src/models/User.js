const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword (user, options) {
    const SALT_FACTOR = 8
    console.log('hashing..............')

    if(!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            // https://github.com/sequelize/sequelize/issues/8596 seems to be a bug..(?)
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        console.log(password, this.password)
        return bcrypt.compareAsync(password, this.password)
    }

    User.associate = function (models) {
    }
    return User
}
