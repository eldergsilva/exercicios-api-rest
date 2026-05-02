const express = require('express');
const { listarConvidados,adicionarConvidado } = require('./controladores/convidados');
const rotas = express();

rotas.get('/convidados',listarConvidados)
rotas.post('/convidados',adicionarConvidado)




module.exports = rotas