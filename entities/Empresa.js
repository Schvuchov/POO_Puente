export class Empresa{

    _nome
    _cnpj
    _endereco
    _email
    _telefone

    constructor(){
        this._nome = ""
        this._cnpj = ""
        this._endereco = ""
        this._email = ""
        this._telefone = ""
    }

    getNome(){
        return this._nome
    }

    setNome(nome){
        this._nome = nome
    }

    getCnpj() {
        return this._cnpj
    }

    setCnpj() {
        this._cnpj = cnpj
    }

    getEndereco(){
        return this._endereco
    }

    setEndereco(){
        this._endereco = endereco
    }

    getEmail(){
        return this._email
    }

    setEmail(){
        this._email = email
    }

    getTelefone(){
        return this._telefone
    }

    setTelefone(){
        this._telefone = telefone
    }


}