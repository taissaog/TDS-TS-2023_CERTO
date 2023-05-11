const turmasRepository = require("../repository/turmas.repository");

module.exports = {
    buscaTodos: (req, res) => {
        turmasRepository
            .buscaTodos()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        if (!id) {
            res.status(404).send({ msg: "Parametro id obrigatorio!" });
        }

        turmasRepository
            .buscaPorId(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },

    inserir: (req, res) => {
        const turmas = req.body;

        if (turmas.length > 1) {
            res.send({
                msg: "Número de registros informado é maior que o permitido!",
            });
        }

        turmasRepository
            .inserir(turmas)
            .then(() => {
                res.send({
                    msg: "Aluno inserido na turma, com sucesso!",
                    turmas,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },

    deletar: (req, res) => {
        const { id } = req.params;

        turmasRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "A turma foi deletada com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaTodosDepDoFunc: (req, res) => {
        turmasRepository
            .buscaTodosDepDoFunc()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaDepDoFunc: (req, res) => {
        const { id } = req.params;
        turmasRepository
            .buscaDepDoFunc(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserirDependentes: async (req, res) => {
        const dependente = req.body;

        const turmas = await turmasRepository
            .buscaPorId(dependente.turmas_id)
            .then((data) => data)
            .catch((error) => {
                return res.status(500).send(error);
            });

        if (turmas.length <= 0) {
            return res.status(404).send({ msg: "Turma não existe!" });
        }

        turmasRepository
            .inserirDependentes(dependente)
            .then((data) => {
                return res.send({ msg: "Dependente registrado com sucesso!" });
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    }
}

