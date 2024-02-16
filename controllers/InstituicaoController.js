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

        app.post('add', (req,res) => {
            this.instituicaoService.inserirInstituicao(req.body)

            res.status(201).send("Criado com sucesso")
        })
    }
}
