const express =require ('express');
const { listarColecao, consultarLivroPorId, adicionarUmLivro } = require('./controladores/livros');
const rotas = express()



rotas.get('/livros', listarColecao);
rotas.get('/livros/:id', consultarLivroPorId);
rotas.post('/livros', adicionarUmLivro);

module.exports = rotas
