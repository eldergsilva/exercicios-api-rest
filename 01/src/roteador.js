const express = require('express');
const { listarAlunos, adicionarAluno, deletarAluno, editarAluno, atualizarAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/alunos',listarAlunos);
rotas.post('/alunos',adicionarAluno);
rotas.put('/alunos/:id',editarAluno);
rotas.patch('/alunos/:id',atualizarAluno)
rotas.delete('/alunos/:id',deletarAluno)




module.exports = rotas