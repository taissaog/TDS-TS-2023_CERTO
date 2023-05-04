const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: (req, res) => {
    funcionariosRepository
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

    funcionariosRepository
      .buscaPorId(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  inserir: (req, res) => {
    const funcionario = req.body;

    if (funcionario.length > 1) {
      res.send({
        msg: "Número de registros informado é maior que o permitido!",
      });
    }

    funcionariosRepository
      .inserir(funcionario)
      .then(() => {
        res.send({
          msg: "Funcionario inserido, com sucesso!",
          funcionario,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  deletar: (req, res) => {
    const { id } = req.params;

    funcionariosRepository
      .deletar(id)
      .then(() => {
        res.send({ msg: "Funcionario deletado com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  atualizar: (req, res) => {
    const funcionario = req.body;
    const { id } = req.params;

    funcionariosRepository
      .atualizar(funcionario, id)
      .then(() => {
        res.send({
          msg: "Funcionario atualizado com sucesso!",
          funcionario,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaTodosDepDoFunc: (req,res) => {
    funcionariosRepository.buscaTodosDepDoFunc().then((data)=>{
      res.send(data);
    }).catch((error)=>{
      res.status(500).send(error);
    })
  },
  buscaDepDoFunc: (req,res) => {
    funcionariosRepository
    const { id } = req.params;
    funcionariosRepository
    .buscaDepFunc(id)
    .then((data) => {
      res.send(data);
    })
    .cath((error) => {
      res.status(500).send(error);
    });
  }
  
};
