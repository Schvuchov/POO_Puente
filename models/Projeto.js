import { DataTypes } from "sequelize";
import sequelize from '../database.js'

const Projeto = sequelize.define('Projeto', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instituicao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false
    },

},

{
    updatedAt: false,
    createdAt: false
}

)

export { Projeto }