const listaDeAlunos = require('../dados/alunos')

const listarAlunos = async (req,res)=>{
     res.send(listaDeAlunos)

}
module.exports={
     listarAlunos
}