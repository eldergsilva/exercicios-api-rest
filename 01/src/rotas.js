const express = require('express');
const { listarAlunos } = require('./controladores/alunos');
const rotas = express();

rotas.get('/alunos',listarAlunos);
rotas.get('');




module.exports = rotas