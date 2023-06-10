const express = require("express");
const dependentesController = require("../controller/dependentes.controller");

const routes = new express.Router();

routes.get("/", dependentesController.buscaTodos);
routes.get("/:id([0-9]+)", dependentesController.buscaPorId);
routes.post("/", dependentesController.inserir);
routes.delete("/:id([0-9]+)", dependentesController.deletar);
routes.put("/:id([0-9]+)", dependentesController.atualizar);
routes.get("/dependentes", dependentesController.buscaTodosDepDoFunc);
routes.get("/dependentes/:id([0-9]+)", dependentesController.buscaDepDoFunc);
routes.post("/dependentes", dependentesController.inserirDependentes);

//ROTAS RENDER
routes.get("/dependentes", (req, res) =>
  res.render("dependentes")
);

module.exports = routes;
