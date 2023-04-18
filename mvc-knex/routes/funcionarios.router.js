const express = require("express"); //para usar no pacote

const routes = new express.Router(); //rotas recebe nova rota

routes.get("/"); //procura dentro do funcionarios / alguma coisa

module.exports = routes; //para poder importar/export