const senhaCorreta = "cubos123";

const validadorDeSenha = (req, res, next) => {
    const { senha } = req.query;
    if (senha !== senhaCorreta) {
        return res.status(401).json({ mensagem: "A senha está incorreta." });
    }
    next();
};

module.exports = validadorDeSenha;