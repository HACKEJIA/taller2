const knex = require('knex');

module.exports = knex({
    client: 'pg', //Indica que se usara postgres como motor de BD
    connection: 'postgres://postgres:Sqlam1234@localhost:5432/mibanco',//Cadena de Conexion
    pool: { min: 1, max: 2},
    acquireConnectionTimeout:5000,
});