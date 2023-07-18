const { DataTypes } = require("sequelize");
const modelSys = require("./modelCreator");



const Pokemon = modelSys.define('Pokemon', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habilities: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fechaAlta: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date,
    },
    fechaBaja: {
        type: DataTypes.DATE,
        defaultValue: new Date,
        allowNull: true,
    },
    fechaEdicion: {
        type: DataTypes.DATE,
        defaultValue: new Date,
        allowNull: true,
    }
}, { timestamps: false });

Pokemon.sync();

module.exports = Pokemon;