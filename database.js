import { Sequelize } from 'sequelize'

const database_url = process.env.BANCO_DE_DADOS

const sequelize = new Sequelize(database_url, {
    dialect: 'postgres',
    benchmark:true
})

export default sequelize