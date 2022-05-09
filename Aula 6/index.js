const express = require("express");
const app = express();
const  {engine}  = require("express-handlebars");
const Sequelize = require("sequelize");

// Config
  // Template Engine
    app.engine("handlebars", engine({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
  // Conexão MySQL
    const sequelize = new Sequelize("aula_6", "root", "123456", {
      host: "localhost",
      dialect: "mysql",
    });

// Rotas
    app.get(  '/cadastro', function (req, res){
      res.send('Rota de Cadastro de Posts');
    })

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
