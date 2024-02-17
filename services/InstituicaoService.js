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

    alterarInstituicao(instituicao){

    }

    buscarInstituicao(){
        let instituicao = new Instituicao()

        instituicao.setNome("bla")
        instituicao.setCnpj("bla")
        instituicao.setEndereco("bla")
        instituicao.setEmail("bla")
        instituicao.setTelefone("bla")

        return instituicao;
    }

    deletarInstituicao(instituicao){

    }

}