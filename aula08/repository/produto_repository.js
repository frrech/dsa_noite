class Produto{
    constructor(nome, preco, categoria, id){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.id = id;
    }
}

let id_produto = 0;
let array_produtos = [];

function inserir(produto){
    if(!produto || !produto.nome || !produto.categoria 
        || !produto.preco) {
            return;
    }
    produto.id = id_produto++;
    array_produtos.push(produto);
    return produto;
}

function listarProdutos(){
    return array_produtos;
}

function buscarID(id){
    for(let i = 0; i < array_produtos.length; i++){
        if(array_produtos[i].id == id){
            return arr[i];
        }
    }
    return undefined;
}

function atualizar(id, produto){
    if(!produto || !produto.nome || !produto.categoria 
        || !produto.preco) {
            return;
    }
    let indiceProduto = array_produtos.findIndex((produto) => {
        return produto.id === id;
    });
    if (indiceProduto === -1) return;
    produto.id = id;
    array_produtos[indiceProduto] = produto;
    return produto;
}

function deletar(id){
    let indiceProduto = array_produtos.findIndex((produto) => {
        return produto.id === id;
    });
    if (indiceProduto === -1) return;
    array_produtos.splice(indiceProduto, 1);
}

function buscarCategoria(categoria){
    return array_produtos.filter((produto) => {
        return produto.categoria === categoria;
    });
}

function buscarNome(nome){
    return array_produtos.filter((product) => {
        let a1 = product.nome.toUpperCase();
        let a2 = nome.toUpperCase();
        return (a1.search(a2) >= 0);
    });
}

module.exports = {
    inserir, listarProdutos, buscarID, 
    atualizar, deletar, buscarCategoria, 
    buscarNome, Produto
};