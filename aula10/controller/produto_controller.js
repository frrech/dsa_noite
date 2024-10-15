const produtoService = require('./service/produto_service');

function listar(req, res) {
    res.json(produtoService.listarProdutos())
}

function buscarID(req, res) {
  const id = req.params.id;
  try{
    res.json(produtoService.buscarID(id));
  }
  catch(err){
    res.status(err.id).json(err);
  }
}

function inserir(req, res){
    const produto = req.body;
    try{
      const produtoInserido = produtoService.inserir(produto);
      res.status(201).json(produtoInserido);
    }
    catch(err){
      res.status(err.id).json(err);
    }
    
}

function atualizar(req, res){
  const id = req.params.id;
  const produto = req.body;
  try{
    const produtoAtualizado = produtoService.atualizar(id, produto);
    res.json({msg:"Atualizando produto com id "+id});
  }
  catch(err){
    res.status(err.id).json(err);
  }

}

function deletar(req, res){
  const id = req.params.id;
  try{
    const prodDeletado = produtoService.deletar(id);
    res.json({msg:"Deletando produto com id "+id});
  }
  catch(err){
    res.status(404).json(err);
  }
}

module.exports = {
    inserir, listar, buscarID, atualizar, deletar
};