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

const editarAluno =(req,res)=>{
    const { id } = req.params;
             

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
    if (idade < 18) {
        return res.status(400).json({ mensagem: "A idade mínima é de 18 anos." });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório." });
    }
    if (!listaDeCursos.includes(curso)){
        return res.status(400).json({ mensagem: "O curso não existe" });
    }      
    
    const aluno = listaDeAlunos.find( (aluno)=>{
        return aluno.id === Number(id)
    });
    if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
}
     aluno.nome = nome;
     aluno.sobrenome = sobrenome;
     aluno.idade = idade;
     aluno.curso=curso;
      
     return res.status(200).json(aluno);
   

}

const atualizarAluno = (req,res) =>{
   const { id } = req.params;
    if (!id) {
        return res.status(400).json({ mensagem: "O id não foi informado." });
    }    
    
    const { nome, sobrenome, idade, curso } = req.body;

    if (idade && idade < 18) {
        return res.status(400).json({ mensagem: "A idade mínima é de 18 anos." });
    }

    if (curso && !listaDeCursos.includes(curso)){
        return res.status(400).json({ mensagem: "O curso não existe" });
    } 
    
    const aluno = listaDeAlunos.find( (aluno)=>{
        return aluno.id === Number(id)
    });
    if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }

     if (nome) aluno.nome = nome;
     if (sobrenome) aluno.sobrenome = sobrenome;
     if (idade) aluno.idade = idade;
     if (curso) aluno.curso = curso;
      
     return res.status(200).json(aluno);


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
     editarAluno,
     atualizarAluno,
     deletarAluno
}