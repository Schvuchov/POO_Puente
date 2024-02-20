import { InstituicaoService } from "../services/InstituicaoService.js"

export class InstituicaoController {

    instituicaoService

    constructor(app){
        this.instituicaoService = new InstituicaoService()

        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        app.get('/buscar', (req, res) => {
            let instituicao = this.instituicaoService.buscarInstituicao()

            res.send(instituicao)    
        })

        app.post('/add', (req,res) => {
            this.instituicaoService.inserirInstituicao(req.body)

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
