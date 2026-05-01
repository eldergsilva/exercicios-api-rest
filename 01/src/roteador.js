const express = require('express');
const { listarAlunos, adicionarAluno, deletarAluno, editarAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/alunos',listarAlunos);
rotas.post('/alunos',adicionarAluno);
rotas.put('/alunos/:id',editarAluno)
rotas.delete('/alunos/:id',deletarAluno)




module.exports = rotas