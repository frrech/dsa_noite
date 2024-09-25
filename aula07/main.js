const produtoService = require("./service/produto_service");


function main(){
    let aux_list = [{nome: "Arroz", categoria: "Alimento", preco: 50.0}, 
    {nome: "Feijao", categoria: "Alimento", preco: 45.0},
    {nome: "Suco", categoria: "Bebida", preco: 40.0},
    {nome: "Massa", preco: 50.0}
    ];
    for (prod of aux_list){
        try{
            produtoService.inserir(prod);
        }
        catch(err){
            console.log("Erro", err.id, " - ", err.msg);
        }
    }
    
    console.log(produtoService.listarProdutos());

    try{
        console.log(produtoService.buscarID(2));
        console.log(produtoService.buscarID(5));

    }
    catch(err){
        console.log("Erro", err.id, " - ", err.msg);
    }
    
    try{
        produtoService.atualizar(2, {nome: "Feijão", categoria: "Alimento", preco: 30});
    }
    catch(err){
        console.log("Erro", err.id, " - ", err.msg);
    }
}

main();