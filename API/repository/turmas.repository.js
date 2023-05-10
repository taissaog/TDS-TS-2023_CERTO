const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("TURMAS");
    },
    inserir: (turmas) => {
        return con.insert(turmas).into("TURMAS");
    },
    deletar: (id) => {
        return con("TURMAS").where({ id: id }).del();
    },
    buscaTodosDepDoFunc: () => {
        return con("TURMAS").innerJoin(
          "ALUNOS",
          "TURMAS.ID",
          "ALUNOS.TURMAS_ID",
          "PROFESSORES.TURMAS_ID"
        );
      },
      buscaDepDoFunc: (id) => {
        return con
          .select(
            "TUR.ID",
            "TUR.NOME AS NOME_TURMAS",
            "ALU.NOME AS NOME_ALUNOS",
            "ALU.TELEFONE AS TELEFONE_ALUNOS",
            "PRO.NOME AS NOME_PROFESSORES",
            "PRO.TELEFONE AS NOME_DEPENDENTE",
            "DEP.TELEFONE AS TELEFONE_PROFESSOSRES"
          )
          .from("TURMAS AS TUR")
          .innerJoin("ALUNOS AS ALU", "TUR.ID", "ALU.TURMAS_ID", "PROFESSORES AS PRO", "PRO.TURMAS_ID")
          .where("TUR.ID", id);
      },
      inserirDependentes: (parametro) => {
        return con.insert(parametro).into("ALUNOS", "PROFESSORES");
      },
}