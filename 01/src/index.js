const express = require('express');
const senha = require('./intermediarios');
const rotas = require('./roteador');
const app = express();

app.use(express.json())
 
app.use(rotas)

 

const PORT = 3000
app.listen(PORT ,()=>{
    console.log(`Servidor no ar na porta ${PORT }`)
})