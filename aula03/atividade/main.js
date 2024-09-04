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
    produto.id = id_produto++;
    array_produtos.push(produto);
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
    //for(let i = 0; i < array_produtos.length; i++){
    //    if(array_produtos[i].id == id){
    //        array_produtos[i] = produto;
    //    }
    //}
    let indiceProduto = array_produtos.findIndex((produto) => {
        return produto.id === id;
    });
    if (indiceProduto === -1) return;
    array_produtos[indiceProduto];
}

function deletar(id){
    //for(let i = 0; i < array_produtos.length; i++){
    //    if(array_produtos[i].id == id){
    //        array_produtos.splice(i, 1);
    //    }
    //}
    let indiceProduto = array_produtos.findIndex((produto) => {
        return produto.id === id;
    });
    if (indiceProduto === -1) return;
    array_produtos.splice(indiceProduto, 1);
}

function buscarCategoria(categoria){
    //for(product of array_produtos){
    //    let aux = [];
    //    if(product.categoria === categoria){
    //        aux.push(product);
    //    }
    //}
    //return aux;
    return array_produtos.filter((produto) => {
        return produto.categoria === categoria;
    });
}

function buscarNome(nome){
    //for(product of array_produtos){
    //    let aux = [];
    //    if(product.nome === nome){
    //        aux.push(product);
    //    }
    //}
    //return aux;
    return array_produtos.filter((product) => {
        let a1 = product.nome.toUpperCase();
        let a2 = nome.toUpperCase();
        return (a1.search(a2) >= 0);
    });
}

function main(){
    inserir(new Produto("Arroz", 4, "Alimento"));
    inserir(new Produto("Suco de laranja", 6.5, "Bebida"));
    inserir(new Produto("Feijão", 6.4, "Alimento"));
    inserir(new Produto("Coca-cola", 8.5, "Bebida"));
    console.log(listarProdutos());
    atualizar(1, new Produto("Batata", 7.8, "Alimento", id_produto++));
    console.log(listarProdutos());

    buscarCategoria(categoria);
    deletar(4);
    console.log(listarProdutos());
}

main();