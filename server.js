import express from 'express'
import config from 'config'

import { EmpresaController } from './controllers/EmpresaController.js'
import { InstituicaoController } from './controllers/InstituicaoController.js'
import { ProjetoController } from './controllers/ProjetoController.js'

const app = express()

const port = process.env.PORT || config.get('server.port')

app.use(bodyParser.json())

const empresaController = new EmpresaController(app)
const instituicaoController = new InstituicaoController(app)
const projetoController = new ProjetoController(app)

app.listen(port, () => {
    console.log("Aplicação executando")
})