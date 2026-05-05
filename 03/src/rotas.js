const express =require ('express');
const { listarColecao, consultarLivroPorId, adicionarUmLivro, substituirUmLivro } = require('./controladores/livros');
const rotas = express()



rotas.get('/livros', listarColecao);
rotas.get('/livros/:id', consultarLivroPorId);
rotas.post('/livros', adicionarUmLivro);
rotas.put('/livros/:id', substituirUmLivro);

module.exports = rotas
