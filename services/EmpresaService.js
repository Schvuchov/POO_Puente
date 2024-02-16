import { Empresa } from "../entities/Empresa.js";

export class EmpresaService {

    constructor(){

    }
    
    inserirEmpresa(body){
        let empresa = new Empresa()
        empresa.setNome(body.nome)
        empresa.setCnpj(body.cnpj)
        empresa.setEndereco(body.endereco)
        empresa.setEmail(body.email)
        empresa.setTelefone(body.telefone)

        console.log(empresa.exibirEmpresa())
    }

    alterarEmpresa(empresa){

    }

    buscarEmpresa(){
        let empresa = new Empresa()

        empresa.setNome("bla")
        empresa.setCnpj("bla")
        empresa.setEndereco("bla")
        empresa.setEmail("bla")
        empresa.setTelefone("bla")

        return empresa;
    }

}