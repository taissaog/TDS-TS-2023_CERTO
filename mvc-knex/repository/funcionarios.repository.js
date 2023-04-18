const connection = require ("../mysql.conection");

module.exports = {
    find: () => {
        return connection.select
    }
}