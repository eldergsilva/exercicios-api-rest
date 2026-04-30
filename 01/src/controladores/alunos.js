const listaDeAlunos = require('../dados/alunos')
let proximoId = 1;
const listarAlunos =  (req,res)=>{
     res.send(listaDeAlunos)

}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório." });
    }
    if (!sobrenome) {
        return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
    }
    if (!idade) {
        return res.status(400).json({ mensagem: "A idade é obrigatória." });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório." });
    }
    if (idade < 18) {
        return res.status(400).json({ mensagem: "A idade mínima é de 18 anos." });
    }

    const novoAluno = { id: proximoId++, nome, sobrenome, idade, curso };
    listaDeAlunos.push(novoAluno);

    return res.status(201).json(novoAluno); 
};
module.exports={
     listarAlunos,
     adicionarAluno
}