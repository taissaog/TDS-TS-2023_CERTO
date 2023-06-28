const knex = require("knex");

module.exports = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "1234",
    password: "root",
    database: "empresa",
  },
});