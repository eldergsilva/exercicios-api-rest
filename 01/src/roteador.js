const express = require('express');
const { listarAlunos, adicionarAluno, deletarAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/alunos',listarAlunos);
rotas.post('/alunos',adicionarAluno);
rotas.delete('/alunos/:id',deletarAluno)




module.exports = rotas