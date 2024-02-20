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

        app.post('/add', (req,res) => {
            this.projetoService.inserirProjeto(req.body)
            res.status(201).send("Criado com sucesso")
        })

        app.put('/alterar/:id', (req,res) => {
            this.projetoService.alterarProjeto(req.params.id, req.body)
            res.status(200).send("Projeto atualizado")
        })

        app.delete('/deletar/:id', (req,res) => {
            this.projetoService.deletarProjeto(req.params.id)
            
        })
    }
} 