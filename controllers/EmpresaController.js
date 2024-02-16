export class EmpresaController{
    constructor(app){

        //para verificar se esta funcionando:
        app.get('/health', (req,res) => {
            console.log("Ta rodando!")
            res.send("ta rodando")
        })

        app.get('/buscar', (req, res) => {
            let empresa = new Empresa()
            empresa.setNome('')
        })

        app.post('add', (req,res) => {
            let empresa = new Empresa()
            empresa.setNome(req.body.nome)
            empresa.setCnpj(req.body.pagina)

            res.status(201).send("Criado com sucesso")
        })
    }
}