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
        return con
        .select(
          "T.ID",
          "A.NOME AS NOME_ALUNO",
          "P.NOME AS NOME_PROFESSORES",
          "NRO_SALA"
        )
        .from("TURMAS AS T")
        .innerJoin("ALUNOS AS A", "T.ALUNOS_ID", "A.ID")
        .innerJoin("PROFESSORES AS P", "T.PROFESSORES_ID", "P.ID");
      },
      buscaDepDoFunc: (id) => {
        return con
        .select(
          "T.ID",
          "A.NOME AS NOME_ALUNO",
          "P.NOME AS NOME_PROFESSORES",
          "NRO_SALA"
        )
        .from("TURMAS AS T")
        .innerJoin("ALUNOS AS A", "T.ALUNOS_ID", "A.ID")
        .innerJoin("PROFESSORES AS P", "T.PROFESSORES_ID", "P.ID")
        .where("TUR.ID", id);
      },
      inserirDependentes: (parametro) => {
        return con.insert(parametro).into("ALUNOS", "PROFESSORES");
      },
}