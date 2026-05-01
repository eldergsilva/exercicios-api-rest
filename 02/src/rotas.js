const express = require('express');
const { listarConvidados } = require('./controladores/convidados');
const rotas = express();

rotas.get('/convidados',listarConvidados)


module.exports = rotas