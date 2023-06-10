const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("dependetes").orderByRaw("id desc");
  },
  buscaPorId: (id) => {
    return con.select().from("dependetes").where("id", "=", id);
  },
  inserir: (dependetes) => {
    return con.insert(dependetes).into("dependetes");
  },
  deletar: (id) => {
    return con("dependetes").where({ id: id }).del();
  },
  atualizar: (dependetes, id) => {
    return con("dependetes").update(dependetes).where({ id: id });
  },
  buscaTodosDepDoFunc: () => {
    return con("dependetes").innerJoin(
      "funcionarios.id",
      "dependentes.funcionario_id"
    );
  },
  buscaDepDoFunc: (id) => {
    return con
      .select(
        "FUN.ID",
        "FUN.NOME AS NOME_FUNCIONARIO",
        "DEP.NOME AS NOME_DEPENDENTE",
        "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
      )
      .from("FUNCIONARIOS AS FUN")
      .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
      .where("FUN.ID", id);
  },
  inserirDependentes: (parametro) => {
    return con.insert(parametro).into("dependentes");
  },
};


