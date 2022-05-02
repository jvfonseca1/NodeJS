const express = require("express");
const app = express()

app.get("/", function(req, res){
    res.send("Welcome to my app")
})

app.get("/about", function(req, res){
    res.send("About the Code")
})

app.get("/blog", function(req, res){
    res.send ("Welcome to My Blog")
})

app.get("/params/:nome/:idade/:cargo", function(req,res){
    res.send ("<h1>Ola " + req.params.nome + "</h1><h2>Sua idade e: " + req.params.idade + "</h2><h3>Sua profissao e: " + req.params.cargo + "</h3>")
})

app.listen(8081, function(){
    console.log("Server Running")
});