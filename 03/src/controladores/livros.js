const livros = require('../dados/livros');
let proximoId = 3;

const listarColecao = (req, res) => {
    return res.status(200).json(livros);
};

const consultarLivroPorId = (req, res) => {
    const { id } = req.params;
    const idNum = Number(id);

    if (isNaN(idNum)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID não é um número válido." });
    }

    const livroAchado = livros.find((livro) => livro.id === idNum);

    if (!livroAchado) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    }

    return res.status(200).json(livroAchado);
};

const adicionarUmLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
    }
    
    const novoLivro = {
        id: proximoId++,
        titulo,
        autor,
        ano,
        numPaginas
    };

    livros.push(novoLivro);
    return res.status(201).json(novoLivro);
};

const substituirUmLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
    }

    const livroAchado = livros.find((livro) => livro.id === Number(id)); 
    
    if (!livroAchado) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    }

    livroAchado.titulo = titulo;
    livroAchado.autor = autor;
    livroAchado.ano = ano;
    livroAchado.numPaginas = numPaginas;
    
    return res.status(200).json({ mensagem: "Livro substituído.", livro: livroAchado });
};

const alterarUmLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    const livroAchado = livros.find((livro) => livro.id === Number(id));

    if (!livroAchado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    livroAchado.titulo = titulo ?? livroAchado.titulo;
    livroAchado.autor = autor ?? livroAchado.autor;
    livroAchado.ano = ano ?? livroAchado.ano;
    livroAchado.numPaginas = numPaginas ?? livroAchado.numPaginas;

    return res.status(200).json({ mensagem: "Livro alterado com sucesso.", livro: livroAchado });
};

const deletarUmLivro = (req, res) => {
    const { id } = req.params;
    const indiceLivro = livros.findIndex((livro) => livro.id === Number(id));

    if (indiceLivro === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    livros.splice(indiceLivro, 1);
    return res.status(200).json({ mensagem: "Livro removido." });
};

module.exports = {
    listarColecao,
    consultarLivroPorId,
    adicionarUmLivro,
    substituirUmLivro,
    alterarUmLivro,
    deletarUmLivro
};