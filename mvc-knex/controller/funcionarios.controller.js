const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: (req, res) => {
    funcionariosRepository
      .find()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  
};
