const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("ALUNOS");
    },
    inserir: (alunos) => {
        return con.insert(alunos).into("ALUNOS");
    },
    deletar: (id) => {
        return con("ALUNOS").where({id: id}).del();
    },
    atualizar: (alunos, id)=> {
        return con("ALUNOS").update(alunos).where({id: id});
    },
    buscaPorId: (id) => {
        return con.select().from("ALUNOS").where("id", "=", id);
    },
}
