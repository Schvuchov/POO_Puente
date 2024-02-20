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

    buscarProjeto(body){
        let projeto = new Projeto()

        projeto.setNome(body.nome)
        projeto.setDescricao(body.descricao)
        projeto.setInstituicao(body.instituicao)

        return projeto;
    }

    alterarProjeto(id, body){
        const indiceRecebido = id
        
    }

    deletarProjeto(id){

    }

}