const { Sequelize } = require('sequelize');
const dbConfig = require('./dbConfig');
require('./models/pokemon.model');

const dbCredentials = new Sequelize(dbConfig);

// authentication
dbCredentials
    .authenticate()
    .then(() => console.log('Coneccion a la base de datos correcta'))
    .catch((error) => console.log(error));
