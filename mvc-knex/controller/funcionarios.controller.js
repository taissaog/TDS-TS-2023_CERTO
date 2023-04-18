const con = require("../mysql.conection");

module.exports = {
    nomeFuncao: (req, res) => {
        return res.send("olá funcionarios!");
    },
}