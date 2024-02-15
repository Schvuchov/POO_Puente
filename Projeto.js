export class Projeto{

    constructor(){
        let _nome
        let _descricao
        let _instituicao

        this.getNome = () => _nome
        this.setNome = (nome) => _nome = nome 

        this.getDescricao = () => _descricao
        this.setDescricao = (descricao) => _descricao = descricao

        this.getInstituicao() = () => _instituicao
        this.setInstituicao() = (instituicao) => _instituicao = instituicao
    }

    cadastrarProjeto(obj){
        projeto = new Projeto()
        projeto.setNome(obj.nome)
        projeto.setDescricao(obj.descricao)
        projeto.setInstituicao(obj.instituicao)
        
    }
}