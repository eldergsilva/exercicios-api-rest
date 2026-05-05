const express =require ('express');
const { listarColecao, consultarLivroPorId, adicionarUmLivro, substituirUmLivro, alterarUmLivro } = require('./controladores/livros');
const rotas = express()



rotas.get('/livros', listarColecao);
rotas.get('/livros/:id', consultarLivroPorId);
rotas.post('/livros', adicionarUmLivro);
rotas.put('/livros/:id', substituirUmLivro);
rotas.patch('/livros/:id', alterarUmLivro);

module.exports = rotas
