import { ProjetoService } from '../services/ProjetoService.js'

export class ProjetoController{

    projetoService

    constructor(app){
        this.projetoService = new ProjetoService()

        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        //bucar projetos
        app.get('/buscar', (req, res) => {
            projetos = this.projetoService.buscarProjetos()
            res.status(200).send({ message: "Projetos encontrados", data: projetos })    
        })

        //bucar projeto pelo id
        app.get('/buscar/:id', (req, res) => {
            projeto = this.projetoService.buscarProjeto(req.params.id)
            res.status(200).send({ message: "Projeto encontrado", data: projeto })
   
        })

        //criar Projeto
        app.post('/add', (req,res) => {
            resultado = this.projetoService.criarProjeto(req.body)
            res.status(201).send({ message: 'Projeto criado com sucesso', data: resultado })
        })

        //alterar projeto
        app.put('/alterar/:id', (req,res) => {
            resultado = this.projetoService.alterarProjeto(req.params.id, req.body)
            res.status(200).send({ message: 'Projeto atualizado', resultado: resultado })
        })

        //deletar projeto
        app.delete('/deletar/:id', (req,res) => {
            this.projetoService.deletarProjeto(req.params.id)
            res.status(200).send({ message: 'Projeto excluido' })
        })
    }
} 