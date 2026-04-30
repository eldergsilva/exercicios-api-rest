const listaDeAlunos = require('../dados/alunos')
let proximoId = 1;
const listarAlunos = async (req,res)=>{
     res.send(listaDeAlunos)

}

const adicionarAluno = async(req,res)=>{
     const {nome,sobrenome,idade,curso} = req.body

     if(!nome ){
       res.send(`O nome é obrigatorio. `)   
     }
     if(!sobrenome ){
       res.send(`O sobrenome é obrigatorio. `)   
     }
     if(!idade ){
       res.send(`A idade é obrigatoria. `)   
     }
     if(!curso ){
       res.send(`O curso é obrigatorio. `)   
     }
     if (idade < 18) {
         return res.status(401).json({ error: "A idade mínima é de 18 anos" });
     }

     const aluno = listaDeAlunos.push(
          {
           id:proximoId++,           
           nome,
           sobrenome,
           idade,
           curso
     }
     ) 
     
     return res.send(aluno);

}
module.exports={
     listarAlunos,
     adicionarAluno
}