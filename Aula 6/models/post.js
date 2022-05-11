const db = require('./db');

const Post = db.sequelize.define('Posts', {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

