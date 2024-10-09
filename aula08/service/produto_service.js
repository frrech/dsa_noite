const produtoRepository = require('../repository/produto_repository');

function listarProdutos(){
    return produtoRepository.listarProdutos();
}

function inserir(produto){
    if(produto && produto.nome && produto.categoria && produto.preco){
        return produtoRepository.inserir(produto);
    }
    else{
        throw {id: 400, msg: "Produto sem dados completos"};
    }
}

function buscarID(id){
    let produto = produtoRepository.buscarID(id);
    if (produto){
        return produto;
    }
    else{
        throw {id: 404, msg: "Produto não encontrado"};
    }
}

function atualizar(id, produto){
    if(produto && produto.nome && produto.categoria && produto.preco){
        const prodAtualizado = produtoRepository.atualizar(id, produto);
        if(prodAtualizado){
            return prodAtualizado;
        }
        else{
            throw {id: 404, msg: "Produto não encontrado"};
        }
    }
    else{
        throw {id: 400, msg: "Produto sem dados corretos"};
    }
}

function deletar(id){
    let produto = produtoRepository.deletar(id);
    if (produto){
        return produto;
    }
    else{
        throw {id: 404, msg: "Produto não encontrado"};
    }
}
module.exports = {
    inserir, listarProdutos, buscarID, atualizar, deletar
};