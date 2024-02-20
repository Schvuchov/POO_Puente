import { InstituicaoService } from "../services/InstituicaoService.js"

export class InstituicaoController {

    instituicaoService

    constructor(app){
        this.instituicaoService = new InstituicaoService()

        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        //buscar instituicao
        app.get('/buscar', (req, res) => {
            instituicoes = this.instituicaoService.buscarInstituicoes()
            res.status(200).send({ message: "Instituições encontradas", data: instituicoes })   
        })

        //buscar instituicao pelo id
        app.get('/buscar/:id', (req, res) => {
            instituicao = this.instituicaoService.buscarInstituicao(req.params.id)
            res.status(200).send({ message: "Instituição encontrada", data: instituicao })
   
        })

        //criar instituicao 
        app.post('/add', (req,res) => {
            resultado = this.instituicaoService.criarInstituicao(req.body)
            res.status(201).send({ message: 'Instituição criada com sucesso', data: resultado })
        })

        //alterar instituicao
        app.put('/alterar/:id', (req,res) => {
            resultado = this.instituicaoService.alterarInstituicao(req.params.id, req.body)
            res.status(200).send({ message: 'Instituição atualizada', resultado: resultado })
        })

        //deletar instituicao
        app.delete('/deletar/:id', (req,res) => {
            this.instituicaoService.deletarInstituicao(req.params.id)
            res.status(200).send({ message: 'Instituicao excluida' })
        })
    }
}
