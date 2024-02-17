export class Projeto{

    _nome
    _descricao
    _instituicao

    constructor(){
        this._nome = ""
        this._descricao = ""
        this._instituicao = ""
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

}