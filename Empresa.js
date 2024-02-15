export class Empresa{

    constructor(){
        let _nome
        let _cnpj
        let _endereco
        let _email
        let _telefone

        this.getNome = () => _nome
        this.setNome = (nome) => _nome = nome 

        this.getCnpj = () => _cnpj
        this.setCnpj = (cnpj) => _cnpj = cnpj 

        this.getEndereco = () => _endereco
        this.setEndereco = (endereco) => _endereco = endereco 

        this.getEmail = () => _email
        this.setEmail = (email) => _email = email 

        this.getTelefone= () => _telefone
        this.setTelefone = (telefone) => _telefone = telefone
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