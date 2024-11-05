/**
 * - Cadastro de livros: anota-se para cada livro o ISBN, nome,
autor(es), editora e ano de publicação. Editora pode ser
relacionada como String.
- Cadastro de autores: anota-se apenas o nome do autor e o país de
origem.
- Retirada de livros: registra a retirada de livros de um cliente. Um
cliente pode retirar no máximo três livros e o livro deve estar
disponível na biblioteca. Essa funcionalidade calcula uma data
para entrega.
- Devolução de livros: registra a devolução de livros de um cliente.
Durante a devolução, o livro torna-se disponível novamente na
biblioteca. Verifica se o livro está com atraso e calcula o número
de dias de atraso.
- Buscas: buscar por livros disponíveis, livros de um autor, livros
por um determinado nome, etc.
 */

class Livro{
    constructor(ISBN, nome, autor, editora, ano_publicacao){
        this.ISBN = ISBN;
        this.nome = nome;
        this.autor = autor;
        this.editora = editora;
        this.ano_publicacao = ano_publicacao;
        this.id = 0;
    }
}

class Autor{
    constructor(nome, pais_origem, id){
        this.nome = nome;
        this.pais_origem = pais_origem;
        this.id = id;
    }
}

let id_autores = 0;
let array_autores = [];

let id_livros = 0;
let array_livros = [];
//funções autor
function cadastraAutor(autor){
    if(!autor || !autor.nome || !autor.pais_origem){
        return;
    }
    autor.id = id_autores++;
    array_autores.push(autor);
    return autor;
}

function atualizaAutor(id, autor){
    if(!autor || !autor.nome || !autor.pais_origem || !lista) {
            return;
    }
    alterObj(id, array_autores, autor)
}

function listaAutor(){
    return array_autores;
}

function deletaAutor(id){
    deleteObj(id, array_autor);
}

function buscaAutorNome(nome){
    return array_autores.filter((autor) => {
        let a1 = autor.nome.toUpperCase();
        let a2 = nome.toUpperCase();
        return (a1.search(a2) >= 0);
    });
}
//funções livro
function cadastraLivro(livro){
    if(!livro || !livro.autor || !livro.ISBN || !livro.nome || !livro.editora || !livro.ano_publicacao){
        return;
    }
    livro.id = id_livros++;
    array_livros.push(livro);
    return livro;
}
function atualizaLivro(id, livro){
    if(!livro || !livro.autor || !livro.ISBN || !livro.nome || !livro.editora || !livro.ano_publicacao){
        return;
    }
    alterObj(id, array_livros, livro);
}
function deletaLivro(id){
    deleteObj(id, array_livros);
}
function listaLivro(){
    return array_livros;
}
function buscaLivrosAutor(nome_autor){
    return array_livros.filter((livro) => {
        let a1 = livro.autor.nome.toUpperCase();
        let a2 = nome_autor.toUpperCase();
        return (a1.search(a2) >= 0);
    });
}
function buscaLivrosNome(nome){
    return array_livros.filter((livro) => {
        let a1 = livro.nome.toUpperCase();
        let a2 = nome.toUpperCase();
        return (a1.search(a2) >= 0);
    });
}
//funções genéricas
function deleteObj(id, lista){
    let idx = lista.findIndex((obj) => {
        return obj.id === id;
    });
    if (idx === -1) return;
    lista.splice(idx, 1);
}

function alterObj(id, lista, obj){
    let idx = lista.findIndex((obj) => {
        return obj.id === id;
    });
    if (idx === -1) return;
    obj.id = id;
    lista[indiceautor] = obj;
    return obj;
}

module.exports = {
    cadastraAutor, atualizaAutor, listaAutor, deletaLivro, buscaAutorNome, cadastraLivro,
    atualizaLivro, listaLivro, buscaLivrosAutor, buscaLivrosNome, deletaAutor
};