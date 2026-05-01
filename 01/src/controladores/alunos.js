const listaDeAlunos = require('../dados/alunos')
const listaDeCursos = require('../dados/cursos')
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
    if (!listaDeCursos.includes(curso)){
        return res.status(400).json({ mensagem: "O curso não existe" });
    }      
    if (idade < 18) {
        return res.status(400).json({ mensagem: "A idade mínima é de 18 anos." });
    }

    const novoAluno = { id: proximoId++, nome, sobrenome, idade, curso };
    listaDeAlunos.push(novoAluno);

    return res.status(201).json(novoAluno); 
}


const deletarAluno = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ mensagem: "O id não foi informado." });
    }

    const indiceAluno = listaDeAlunos.findIndex((aluno) => aluno.id === Number(id));

    if (indiceAluno === -1) {
        return res.status(404).json({ mensagem: "Aluno não encontrado!" });
    }

    listaDeAlunos.splice(indiceAluno, 1);

    return res.status(204).send();
};

module.exports={
     listarAlunos,
     adicionarAluno,
     deletarAluno
}