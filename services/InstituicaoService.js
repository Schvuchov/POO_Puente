import { Instituicao } from "../entities/Instituicao.js";
import { Instituicao } from "../models/Instituicao.js"

export class InstituicaoService {

    constructor(){

    }
    
    criarInstituicao = async (body) => {
        const { nome, cnpj, endereco, email, telefone } = body
        const novaInstituicao = { nome, cnpj, endereco, email, telefone }
        const resultado = await Instituicao.create(novaInstituicao)
        return resultado
    }

    buscarInstituicoes = async () => {
        const instituicoes = await Instituicao.findAll()
        return instituicoes
    }

    buscarInstituicao = async (id) => {
        const instituicao = await Instituicao.findByPk(id)
        return instituicao
    }

    alterarInstituicao = async (id,body) => {
        const { nome, cnpj, endereco, email, telefone } = body
        const instituicaoAtualizada = { nome, cnpj, endereco, email, telefone }
        const resultado = await Instituicao.update(instituicaoAtualizada, { where: { id: id } })
        return resultado
    }

    deletarInstituicao = async (id) => {
        await Instituicao.destroy({ where: { id: id } })
    }

}