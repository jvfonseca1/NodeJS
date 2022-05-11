const express = require("express");
const app = express();
const  {engine}  = require("express-handlebars");
const bodyParser = require("body-parser");


// Config
  // Template Engine
    app.engine("handlebars", engine({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

  //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())

// Rotas
    app.get("/", function (req, res){
      res.render('home')
    })
    app.get(  '/cadastro', function (req, res){
      res.render('formularios')
    })
    app.post( '/add', function (req, res){
      res.send('Fomulário Recebido')
    })

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
