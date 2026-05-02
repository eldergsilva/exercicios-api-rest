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

module.exports = { listarConvidados };