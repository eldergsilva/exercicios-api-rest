const livros = require('../dados/livros')
let proximoId = 3;

const listarColecao =(req,res)=>{
    return res.status(201).json({livros })

}

const consultarLivroPorId = (req, res) => {
    const { id } = req.params;

     
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
        });
    }

     
    const livroAchado = livros.find((livro) => {
        return livro.id === Number(id);
    });

     
    if (!livroAchado) {
        return res.status(404).json({
            mensagem: "Não existe livro para o ID informado."
        });
    }

    
    return res.status(200).json(livroAchado);
}

const adicionarUmLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

     
    if (!titulo) {
        return res.status(400).json({ mensagem: "O titulo é obrigatório." });
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "O autor é obrigatório." });
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "O ano é obrigatório." });
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O numero de paginas é obrigatório." });
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
}

const substituirUmLivro =( req,res)=>{
    const { id } = req.params;
    
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: "O titulo é obrigatório." });
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "O autor é obrigatório." });
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "O ano é obrigatório." });
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O numero de paginas é obrigatório." });
    }
    

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
        });
    }


    const livroAchado = livros.find((livro) => {
        return livro.id === Number(id);
    }); 
    
    if (!livroAchado) {
        return res.status(404).json({
            mensagem: "Não existe livro para o ID informado."
        });
    }
      livroAchado.titulo =  titulo
      livroAchado.autor =autor
      livroAchado.ano=ano
      livroAchado.numPaginas=numPaginas
      console.log(livroAchado);
    
    
    
    return res.status(200).json({mensagem:"Livro substituído."})
}


const alterarUmLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "ID inválido." });
    }

    const livroAchado = livros.find((livro) => livro.id === Number(id));

    if (!livroAchado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

     
    livroAchado.titulo = titulo ?? livroAchado.titulo;
    livroAchado.autor = autor ?? livroAchado.autor;
    livroAchado.ano = ano ?? livroAchado.ano;
    livroAchado.numPaginas = numPaginas ?? livroAchado.numPaginas;

    return res.status(200).json({ mensagem: "Livro alterado com sucesso.", livro: livroAchado });
}
module.exports={
    listarColecao,
    consultarLivroPorId,
    adicionarUmLivro,
    substituirUmLivro,
    alterarUmLivro
}