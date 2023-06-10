const dependentesRepository = require("../repository/dependentes.repository");

module.exports = {
  buscaTodos: async (req, res) => {
    const data = await dependentesRepository
      .buscaTodos()
      .then((result) => result)
      .catch((error) => {
        res.status(500).send(error);
      });
    res.render("funcionarios", { data });
  },
  buscaPorId: async (req, res) => {
    const { id } = req.params;

    let data = await dependentesRepository.buscaPorId(id);

    data = data[0];

    data.DATA_NSC = formataData(data.DATA_NSC);

    res.render("cadastro_dependentes", { data });
  },
  inserir: async (req, res) => {
    var dependentes = req.body;

    console.log(dependentes);

    // if ternario para validar o status retornado do formulario cadastro_funcionario.hbs
    dependentes.STATUS = dependentes.STATUS == "on";
    dependentes.CPF = dependentes.CPF.replaceAll(".", "").replaceAll("-", "");

    if (dependentes.ID == "") {
        dependentes.ID = null;
      await dependentesRepository.inserir(dependentes);
    } else {
      const { ID } = dependentes;
      await dependentesRepository.atualizar(dependentes, ID);
    }

    res.redirect("dependentes");
  },
  deletar: (req, res) => {
    const { id } = req.params;

    dependentesRepository
      .deletar(id)
      .then(() => {
        res.send({ msg: "Dependente deletado com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  atualizar: (req, res) => {
    const dependentes = req.body;
    const { id } = req.params;

    dependentesRepository
      .atualizar(dependentes, id)
      .then(() => {
        res.send({
          msg: "Dependente atualizado com sucesso!",
          dependentes,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaTodosDepDoFunc: async (req, res) => {
    const data = await dependentesRepository
      .buscaTodosDepDoFunc()
      .then((data) => data);

    res.render("dependentes", { data });
  },
  buscaDepDoFunc: (req, res) => {
    const { id } = req.params;
    dependentesRepository
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

    const dependentes = await dependentesRepository
      .buscaPorId(dependente.funcionario_id)
      .then((data) => data)
      .catch((error) => {
        return res.status(500).send(error);
      });

    if (dependentes.length <= 0) {
      return res.status(404).send({ msg: "Dependente não existe!" });
    }

    dependentesRepository
      .inserirDependentes(dependentes)
      .then((data) => {
        return res.send({ msg: "Dependente registrado com sucesso!" });
      })
      .catch((error) => {
        return res.status(500).send(error);
      });
  },
};

function formataData(end_date) {
  var ed = new Date(end_date);
  var d = ed.getDay();
  var m = ed.getMonth() + 1;
  var y = ed.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}
