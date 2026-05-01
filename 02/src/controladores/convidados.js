const listaDeConvidados = require('../dados/convidados')

const listarConvidados =( req,res)=>{
    return res.send(listaDeConvidados)
}
module.exports = {
    listarConvidados

}