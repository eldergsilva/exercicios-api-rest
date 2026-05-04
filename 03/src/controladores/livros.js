const livros = require('../dados/livros')

const listarColecao =(req,res)=>{
    return res.status(201).json({livros })

}

const consultarLivroPorId = (req,res)=>{
    const {id}= req.params
   
    if (!id || isNaN(Number(id))) {

    return res.status(400).json({mensagem: "O valor do parâmetro ID da URL não é um número válido."
    });
}
    const livroAchado = livros.find((livro)=>{
        return livro.id === Number(id)
    })

    return  res.status(200).json(livroAchado)
}

module.exports={
    listarColecao,
    consultarLivroPorId
}