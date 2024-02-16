import { ProjetoService } from '../services/ProjetoService.js'

export class ProjetoController{

    projetoService

    constructor(app){

        this.projetoService = new ProjetoService()

        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        app.get('/buscar', (req, res) => {
            let projeto = this.projetoService.buscarProjeto()

            res.send(projeto)    
        })

        app.post('add', (req,res) => {
            this.projetoService.inserirProjeto(req.body)

            res.status(201).send("Criado com sucesso")
        })
    }
} 