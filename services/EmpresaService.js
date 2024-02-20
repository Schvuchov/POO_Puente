import { Empresa } from "../entities/Empresa.js";
import { Empresa } from "../models/Empresa.js"

export class EmpresaService {

    constructor(){

    }

    criarEmpresa = async (body) => {
        const { nome, cnpj, endereco, email, telefone } = body
        const novaEmpresa = { nome, cnpj, endereco, email, telefone }
        const resultado = await Empresa.create(novaEmpresa)
        return resultado
    }

    buscarEmpresas = async () => {
        const empresas = await Empresa.findAll()
        return empresas
 
    }

    buscarEmpresa = async (id) => {
        const empresa = await Empresa.findByPk(id)
        return empresa
    }

    alterarEmpresa = async (id, body) => {
        const { nome, cnpj, endereco, email, telefone } = body
        const empresaAtualizada = { nome, cnpj, endereco, email, telefone }
        const resultado = await Empresa.update(empresaAtualizada, { where: { id: id } })
        return resultado
    }
    
    deletarEmpresa = async (id) => {
        await Empresa.destroy({ where: { id: id } })
    }

}