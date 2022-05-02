// Configurar Sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
})

// Verificar Conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

// Criar Tabela Postagem
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Fala Burro",
    conteudo: "bão?"
})

// Criar Tabela Usuarios
const Usuario = sequelize.define('usuarios',
{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Joao Victor",
    sobrenome: "Fonseca",
    idade: 20,
    email: "joao.fonseca.victor@gmail.com"
})
