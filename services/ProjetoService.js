import { Projeto } from "../entities/Projeto.js";
import { Projeto } from "../models/Projeto.js"

export class ProjetoService {

    constructor(){

    }
    
    criarProjeto = async (body) => {
        const { nome, descricao, instituicao, categoria } = body
        const novoProjeto = { nome, descricao, instituicao, categoria }
        const resultado = await Projeto.create(novoProjeto)
        return resultado
    }

    buscarProjetos = async () => {
        const projetos = await Projeto.findAll()
        return projetos
    }

    buscarProjeto = async(id) => {
        const projeto = await Projeto.findByPk(id)
        return projeto
    }


    alterarProjeto = async(id, body) => {
        const { nome, descricao, instituicao, categoria } = body
        const projetoAtualizado = { nome, descricao, instituicao, categoria }
        const resultado = await Projeto.update(projetoAtualizado, { where: { id: id } })
        return resultado
        
    }

    deletarProjeto = async(id) => {
        await Projeto.destroy({ where: { id: id } })
    }

}