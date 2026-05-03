const listaDeConvidados = require('../dados/convidados')

const listarConvidados = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(200).json(listaDeConvidados);
    }

    if (listaDeConvidados.includes(nome)) {
        return res.status(200).json({ mensagem: "Convidado presente." });
    }

    return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." });
}



const adicionarConvidado = (req,res)=>{
   const {nome} = req.body ;
   if (!nome) {
        return res.status(400).json({ mensagem: "Nome não informado." });
    }

   if (listaDeConvidados.includes(nome)) {
            return res.status(404).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });

    }  

    listaDeConvidados.push(nome);

    return res.status(201).json({ mensagem: "Convidado adicionado." });
}
 
const removerConvidado =(req,res)=>{

   const { nome } = req.params;


   if (!nome) {
        return res.status(400).json({ mensagem: "Nome não informado." });
    }
  if (!listaDeConvidados.includes(nome)) {
    return res.status(404).json({ mensagem: "Convidado não encontrado." });
}

    const indice = listaDeConvidados.findIndex((convidado) => convidado === nome);
     listaDeConvidados.splice(indice, 1);
      
    return res.status(200).json({ mensagem: "Convidado removido." });

}
module.exports = { 
    listarConvidados,
    adicionarConvidado,
    removerConvidado
 };