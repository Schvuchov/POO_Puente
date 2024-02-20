import { DataTypes } from "sequelize";
import sequelize from '../database.js';

const Instituicao = sequelize.define('Instituicao', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

},

{
    updatedAt: false,
    createdAt: false
}

)

export { Instituicao }