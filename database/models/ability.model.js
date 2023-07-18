const { DataTypes, DATE, INTEGER, INET, STRING } = require("sequelize");
const modelSys = require("./modelCreator");

const Ability = modelSys.define('Ability', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ability: {
        type: STRING,
        allowNull: false,
    },
    fechaAlta: {
        type: DATE,
        defaultValue: new Date(),
        allowNull: true,
    },
}, { timestamps: false });
Ability.sync();


module.exports = Ability;