export class Instituicao{

    _id
    _nome
    _cnpj
    _endereco
    _email
    _telefone

    constructor(){
        this._id = ""
        this._nome = ""
        this._cnpj = ""
        this._endereco = ""
        this._email = ""
        this._telefone = ""
    }

    getId(){
        return this._id
    }

    setId(id){
        this._id = id
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

    setCnpj(cnpj) {
        this._cnpj = cnpj
    }

    getEndereco(){
        return this._endereco
    }

    setEndereco(endereco){
        this._endereco = endereco
    }

    getEmail(){
        return this._email
    }

    setEmail(email){
        this._email = email
    }

    getTelefone(){
        return this._telefone
    }

    setTelefone(telefone){
        this._telefone = telefone
    }

    exibirInstituicao(){
        console.log("Instituição "+this.getNome()+" - CNPJ: "+this.getCnpj()+", Endereço: "+this.getEndereco()+", Email: "+this.getEmail()+", Telefone: "+this.getTelefone())
    }


}