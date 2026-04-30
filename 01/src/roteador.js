const express = require('express');
const { listarAlunos, adicionarAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/alunos',listarAlunos);
rotas.post('/alunos',adicionarAluno);




module.exports = rotas