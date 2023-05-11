const express = require("express");

const alunosRoutes = require("../routes/alunos.router");
const professoresRoutes = require("../routes/professores.router");
const turmasRoutes = require("../routes/turmas.router");

const routes = new express.Router();

routes.use("/alunos", alunosRoutes);
routes.use("/professores", professoresRoutes);
routes.use("/turmas", turmasRoutes);

module.exports = routes;