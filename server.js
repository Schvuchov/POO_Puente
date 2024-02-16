import express from 'express'
import config from 'config'
import { EmpresaController } from './controllers/EmpresaController.js'

const app = express()

const port = process.env.PORT || config.get('server.port')

app.use(bodyParser.json())

const empresaController = new EmpresaController(app)

app.listen(port, () => {
    console.log("Aplicação executando")
})