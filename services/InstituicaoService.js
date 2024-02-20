import { Instituicao } from "../entities/Instituicao.js";

export class InstituicaoService {

    constructor(){

    }
    
    inserirInstituicao(body){
        let instituicao = new Instituicao()
        instituicao.setNome(body.nome)
        instituicao.setCnpj(body.cnpj)
        instituicao.setEndereco(body.endereco)
        instituicao.setEmail(body.email)
        instituicao.setTelefone(body.telefone)

        console.log(instituicao.exibirInstituicao())
    }

    

    buscarInstituicao(body){
        let instituicao = new Instituicao()

        instituicao.setNome(body.nome)
        instituicao.setCnpj(body.cnpj)
        instituicao.setEndereco(body.endereco)
        instituicao.setEmail(body.email)
        instituicao.setTelefone(body.telefone)

        return instituicao;
    }

    alterarInstituicao(id,body){

    }

    deletarInstituicao(id){

    }

}