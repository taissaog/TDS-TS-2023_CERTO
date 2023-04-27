const con = require("../mysql-connection");
''
module.exports = {
  find: () => {
    return con.select().from("funcionarios");
  },
  findById: (id) => {
    return con.select().from("funcionarios").where("id", "=", id);
  },
};
