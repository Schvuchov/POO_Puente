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
            empresas = this.empresaService.buscarEmpresas()
            res.status(200).send({ message: "Empresas encontradas", data: empresas })
   
        })

        app.get('/buscar/:id', (req, res) => {
            empresa = this.empresaService.buscarEmpresa(req.params.id)
            res.status(200).send({ message: "Empresas encontradas", data: empresa })
   
        })

        app.post('/add', (req,res) => {
            resultado = this.empresaService.criarEmpresa(req.body)
            res.status(201).send({ message: 'Empresa criada com sucesso', data: resultado })
        })

        
        app.put('/alterar/:id', (req,res) => {
            resultado = this.empresaService.alterarEmpresa(req.params.id, req.body)
            res.status(200).send({ message: 'Empresa atualizada', resultado: resultado })
        })

        app.delete('/deletar/:id', (req,res) => {
            this.empresaService.deletarEmpresa(req.params.id)
            res.status(200).send({ message: 'Empresa excluida' })
        })
    }
} 