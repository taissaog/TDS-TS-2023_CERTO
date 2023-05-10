const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("PROFESSORES");
    },
    inserir: (professores) => {
        return con.insert(professores).into("PROFESSORES");
    },
    deletar: (id) => {
        return con("PROFESSORES").where({id: id}).del();
    },
    atualizar: (professores, id)=> {
        return con("PROFESSORES").update(professores).where({id: id});
    },
    buscaPorId: (id) => {
        return con.select().from("PROFESSORES").where("id", "=", id);
    },
}