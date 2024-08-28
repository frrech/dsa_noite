const c = 10; // constante
let i = 0; // variável
for(i = 1; i < 11; i++){
    console.log(`Olá mundo ${i}`);
}
let num = (i > 11) ? "maior" : (i == 11) ? "Igual" : "menor";
console.log(num);

function soma(a, b){
    const res = a + b;
    return res;
}

console.log("Soma: ", soma(10, 20));

const somaAlt = function(a, b){
    return a+b;
}

console.log("Soma Alt: ", somaAlt(20, 20));

const somaArrowFunction = (a, b) => a+b;

console.log("Soma arrow: ", somaArrowFunction(30, 20));

const produto1 = {
    nome: "Produto 1",
    preco: 30.10,
    categoria: "Categoria 1"
};

const produto2 = new Object(); // const produto2 = {}; tbm funciona
produto2.nome = "Produto 2";
produto2.preco = 40.20;
produto2.categoria = "Categoria 1";
produto2.calculaImposto = () => {
    return this.preco * 0.2;
}
console.log("Produto 1: ", produto1);
console.log("Produto 2:", produto2);
console.log("imposto produto 2:", produto2.calculaImposto());

class Produto{
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    calculaImposto(){
        return this.preco * 0.1;
    }
}

const produto3 = new Produto("Produto 3", 50.40, "Categoria 1");
const array_produtos = [produto1, produto2, produto3];
for (let elem in array_produtos){
    console.log(elem);
}

