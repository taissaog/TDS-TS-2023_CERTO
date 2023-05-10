const express = require("express");
const turmasController = require("../controller/turmas.controller");

const routes = new express.Router();

routes.get("/", turmasController.buscaTodos);
routes.post("/", turmasController.inserir);
routes.delete("/:id([0-9]+)", turmasController.deletar);
routes.get("/TURMAS", turmasController.buscaTodosDepDoFunc);
routes.get("/TURMAS/:id([0-9]+)", turmasController.buscaDepDoFunc);
routes.post("/TURMAS", turmasController.inserirDependentes);

module.exports = routes;
