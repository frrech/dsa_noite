import produto_repository from "./repository/produto_repository.js";


function main(){
    produto_repository.inserir(new produto_repository.Produto("Arroz", 4, "Alimento"));
    produto_repository.inserir(new produto_repository.Produto("Suco de laranja", 6.5, "Bebida"));
    produto_repository.inserir(new produto_repository.Produto("Feijão", 6.4, "Alimento"));
    produto_repository.inserir(new produto_repository.Produto("Coca-cola", 8.5, "Bebida"));
    console.log(produto_repository.listarProdutos());
    produto_repository.atualizar(1, new produto_repository.Produto("Batata", 7.8, "Alimento"));
    console.log(produto_repository.listarProdutos());

    produto_repository.buscarCategoria("Alimento");
    produto_repository.deletar(4);
    console.log(produto_repository.listarProdutos());
}

main();