export class Projeto{

    _nome
    _descricao
    _instituicao
    _categoria

    constructor(){
        this._nome = ""
        this._descricao = ""
        this._instituicao = ""
        this._categoria = ""
    }

    getNome(){
        return this._nome
    }

    setNome(nome){
        this._nome = nome
    }

    getDescricao(){
        return this._descricao
    }

    setDescricao(descricao){
        this._descricao = descricao
    }

    getInstituicao(){
        return this._instituicao
    }

    setInstituicao(instituicao){
        this._instituicao = instituicao
    }

    getCategoria(){
        return this._categoria
    }

    setCategoria(categoria){
        this._categoria = categoria
    }

    exibirProjeto(){
        console.log("Projeto: "+this.getNome()+", Descrição: "+this.getDescricao()+", Categoria: "+this.getCategoria()+", Instituição: "+this.getInstituicao())
    }

}