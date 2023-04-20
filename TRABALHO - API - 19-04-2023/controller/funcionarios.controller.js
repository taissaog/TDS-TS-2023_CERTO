const conection = require("../mysql.conection");

module.exports = {
    nomeFuncao: (req, res) => {
        return res.send("olá funcionarios!");
    },
};

exports.up = function(knex, Promise) {
    return knex.schema.createTable('funcionarios', function(table) {
        tabela.increments("id").primary();
        tabela.string("nome").notNull();
        tabela.string("sobrenome").notNull().defaulfTo("Silva");
    });
};
ç
knex.insert({id: 1, name: 'Test'}).into('funcionarios')

// exports.up = function (knex, Promise) {
//     return Promise.all([
//         knex.schema.createTableIfNotExists("payment_paypal_status", function (table) {
//             table.increments(); // integer id

//             // name
//             table.string('name');

//             //description
//             table.string('description');
//         }).then(function () {
//                 return knex("payment_paypal_status").insert([
//                     {name: "A", description: "A"},
//                     {name: "B", description: "BB"},
//                     {name: "C", description: "CCC"},
//                     {name: "D", description: "DDDD"}
//                 ]);
//             }
//         ),
//     ]);
// };

// exports.down = function (knex, Promise) {
//     return Promise.all([
//         knex.schema.dropTableIfExists("payment_paypal_status")
//     ]);
// };

// exports.up = (knex) => {
//     return knex.schema
//         .createTable("payment_paypal_status", (table) => {
//             table.increments()
//             table.string("name")
//             table.string("description")
//         })
//         .then(() =>
//             knex("payment_paypal_status").insert([
//                 {name: "A", description: "A"},
//                 {name: "B", description: "BB"},
//                 {name: "C", description: "CCC"},
//                 {name: "D", description: "DDDD"},
//             ])
//         )
// }

// exports.down = (knex) => {
//     return knex.schema.dropTableIfExists("payment_paypal_status")
// }


// knex("funcionarios").insert({
//     nome: "Carlos",
//     sobrenome: "Almeida",
// });

// knex("funcionarios").insert([
// 	{
// 		nome: "Mariana",
// 		sobrenome: "Souza",
// 	},{
// 		nome: "Pedro"
// 	}//Como o sobrenome não foi especificado, será utilizado o valor padrão anotado na tabela.
// ]);

// knex("clientes").select() //Selecionará todos os campos
// knex("clientes").select(["id","nome"])//Selecionará apenas os campos id e nome
// knex("clientes").select().first() //Seleciona só o primeiro elemento com todas as colunas
// knex("clientes").select().where("id",1)//Seleciona o elemento onde o id é igual a 1
// knex("clientes").select().where({nome:"Ana", sobrenome:"Silva"}) //Seleciona todos os elementos que possuirem o nome Ana e o sobrenome Silva

// knex("clientes").where("id",1).del()//Deleta o elemento onde o id é igual a 1
// knex("clientes").where({sobrenome:"Silva"}).del() //Deleta todos os elementos que possuirem o sobrenome Silva
// knex("clientes").whereBetween("id",[10,20]).del() //Deleta os elementos que possuirem o id no intervalo de 10 e 20

// knex('clientes')
//   .where("id",8)
//   .update({
//     sobrenome: "Almeida"
//   })