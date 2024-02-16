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
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    getCnpj() {
        return this.cnpj
    }

    setCnpj() {
        this.cnpj = cnpj
    }

    getEndereco(){
        return this.endereco
    }

    setEndereco(){
        this.endereco = endereco
    }

    getEmail(){
        return this.email
    }

    setEmail(){
        this.email = email
    }

    getTelefone(){
        return this.telefone
    }

    setTelefone(){
        this.telefone = telefone
    }



    cadastrarEmpresa(obj){
        empresa = new Empresa()
        empresa.setNome(obj.nome)
        empresa.setCnpj(obj.cnpj)
        empresa.setEndereco(obj.endereco)
        empresa.setEmail(obj.email)
        empresa.setTelefone(obj.telefone)
    }

}