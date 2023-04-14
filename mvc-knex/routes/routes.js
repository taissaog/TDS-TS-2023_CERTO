const express = require("express"); //importou o pacote para o arquivo
const empresaRoute = require("./empresa.routes");
const routes = new express.Router(); //para 

routes.get("/empresa", empresaRoute);

module.exports = routes;
