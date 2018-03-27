module.exports = {
    port: process.env.PORT || 8081,
    db: {
        // prod: {
        //     database: process.env.DB_NAME || 'dotnetcoring_com',
        //     user: process.env.DB_USER || 'testing@d229686',
        //     password: process.env.DB_PASS || 'P]J~xL64^_>2:5x3',
        //     options: {
        //         dialect: process.env.DIALECT || 'mysql',
        //         host: process.env.HOST || 'mysql690.loopia.se'        
        //     }
        // },
        // dev: {
        database: process.env.DB_NAME || 'goi',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost'
        }
        // }
    },

    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
