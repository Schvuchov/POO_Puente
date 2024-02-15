export class Instituicao{

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

    cadastrarInstituicao(obj){
        instituicao = new Instituicao()
        instituicao.setNome(obj.nome)
        instituicao.setCnpj(obj.cnpj)
        instituicao.setEndereco(obj.endereco)
        instituicao.setEmail(obj.email)
        instituicao.setTelefone(obj.telefone)
    }

}