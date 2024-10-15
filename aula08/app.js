const express = require('express')
const app = express()
const port = 3000
const produtoService = require('./service/produto_service');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/produtos/', (req, res) => {
  res.json(produtoService.listarProdutos())
})

app.get('/produtos/:id', (req, res) => {
const id = req.params.id;
try{
  res.json(produtoService.buscarID(id));
}
catch(err){
  res.status(err.id).json(err);
}
})

app.post('/produtos/', (req, res) => {
  const produto = req.body;
  try{
    const produtoInserido = produtoService.inserir(produto);
    res.status(201).json(produtoInserido);
  }
  catch(err){
    res.status(err.id).json(err);
  }
  
})

app.put('/produtos/:id', (req, res) => {
const id = req.params.id;
const produto = req.body;
try{
  const produtoAtualizado = produtoService.atualizar(id, produto);
  res.json({msg:"Atualizando produto com id "+id});
}
catch(err){
  res.status(err.id).json(err);
}

})

app.delete('/produtos/:id', (req, res) => {
const id = req.params.id;
try{
  const prodDeletado = produtoService.deletar(id);
  res.json({msg:"Deletando produto com id "+id});
}
catch(err){
  res.status(404).json(err);
}
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})