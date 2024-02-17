import { EmpresaService } from '../services/EmpresaService.js'

export class EmpresaController{

    empresaService

    constructor(app){

        this.empresaService = new EmpresaService()

        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        app.get('/buscar', (req, res) => {
            let empresa = this.empresaService.buscarEmpresa()

            res.send(empresa)    
        })

        app.post('/add', (req,res) => {
            this.empresaService.inserirEmpresa(req.body)

            res.status(201).send("Criado com sucesso")
        })
    }
} 