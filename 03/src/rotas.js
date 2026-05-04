const express =require ('express');
const { listarColecao, consultarLivroPorId } = require('./controladores/livros');
const rotas = express()

rotas.get('/livros',listarColecao);
rotas.get('/livros/:id',consultarLivroPorId);

module.exports = rotas
