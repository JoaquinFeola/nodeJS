const dbConfig = {
    host: 'localhost',
    database: 'Pokedex_DB',
    username: 'joaco',
    password: 'abril2011',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true // Si es necesario para conexiones seguras
        }
    }
};
module.exports = dbConfig