const express = require("express");

const alunosRoutes = require("./alunos.router");
const professoresRoutes = require("./professores.router");
const turmasRoutes = require("./turmas.router");

const routes = new express.Router();

routes.use("/alunos", alunosRoutes);
routes.use("/professores", professoresRoutes);
routes.use("/turmas", turmasRoutes);

module.exports = routes;