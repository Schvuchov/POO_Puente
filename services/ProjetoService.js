import { Projeto } from "../entities/Projeto.js";

export class ProjetoService {

    constructor(){

    }
    
    inserirProjeto(body){
        let projeto = new Projeto()
        projeto.setNome(body.nome)
        projeto.setDescricao(body.descricao)
        projeto.setInstituicao(body.instituicao)

        console.log(projeto.exibirProjeto())
    }

    alterarProjeto(projeto){

    }

    buscarProjeto(){
        let projeto = new Projeto()

        projeto.setNome(body.nome)
        projeto.setDescricao(body.descricao)
        projeto.setInstituicao(body.instituicao)

        return projeto;
    }

    deletarProjeto(projeto){

    }

}