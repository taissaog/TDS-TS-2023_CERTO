const professoresRepository = require("../repository/professores.repository");

module.exports = {
    buscaTodos: (req, res) => {
      professoresRepository
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
  
      professoresRepository
        .buscaPorId(id)
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },

    inserir: (req, res) => {
      const professores = req.body;
  
      if (professores.length > 1) {
        res.send({
          msg: "Número de registros informado é maior que o permitido!",
        });
      }
  
      professoresRepository
        .inserir(professores)
        .then(() => {
          res.send({
            msg: "Professor inserido, com sucesso!",
            professores,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },

    deletar: (req, res) => {
      const { id } = req.params;
  
      professoresRepository
        .deletar(id)
        .then(() => {
          res.send({ msg: "Professor deletado com sucesso!" });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
    
    atualizar: (req, res) => {
      const professores = req.body;
      const { id } = req.params;
  
      professoresRepository
        .atualizar(professores, id)
        .then(() => {
          res.send({
            msg: "Professor atualizado com sucesso!",
            professores,
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    },
}


