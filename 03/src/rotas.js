const express =require ('express');
const { listarColecao, consultarLivroPorId, adicionarUmLivro, substituirUmLivro, alterarUmLivro, deletarUmLivro } = require('./controladores/livros');
const rotas = express()



rotas.get('/livros', listarColecao);
rotas.get('/livros/:id', consultarLivroPorId);
rotas.post('/livros', adicionarUmLivro);
rotas.put('/livros/:id', substituirUmLivro);
rotas.patch('/livros/:id', alterarUmLivro);
rotas.delete('/livros/:id', deletarUmLivro);

module.exports = rotas
