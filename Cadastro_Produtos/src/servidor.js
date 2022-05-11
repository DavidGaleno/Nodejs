const porta = 3002
const express = require('express')
const bancoDeDados = require('./bancodedados')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.delete('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.removeProduto(req.params.id))
})
app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        valor:req.body.valor
    })
    res.send(produto)
})
app.listen(porta,()=>console.log('Sucesso!'))