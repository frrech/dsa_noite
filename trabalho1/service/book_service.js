const bookRepository = require("../repository/book_repository");

function cadastraAutor(autor){
    if(autor && autor.nome && autor.pais_origem && autor.id){
        return bookRepository.cadastraAutor(autor);
    } else {
        throw {id: 400, msg: "Autor sem dados completos"};
    }
}

function cadastraLivro(livro){
    if(livro && livro.ISBN && livro.nome && livro.autor && 
        livro.editora && livro.ano_publicacao){
        return bookRepository.cadastraLivro(livro);
    } else {
        throw {id: 400, msg: "Livro sem dados completos"};
    }
}

function deletaLivro(id){
    const livro = bookRepository.deletaLivro(id);
    if(livro){
        return livro;
    } else {
        throw {id: 404, msg: "Livro não encontrado"};
    }
}

function deletaAutor(id){
    const autor = bookRepository.deletaAutor(id);
    if(autor){
        return autor;
    } else {
        throw {id: 404, msg: "Autor não encontrado"};
    }
}

function listaAutor(){
    return bookRepository.listaAutor();
}

function listaLivro(){
    return bookRepository.listaLivro();
}

function buscaLivrosAutor(nome_autor){
    if(nome_autor){
        return bookRepository.buscaLivrosAutor(nome_autor);
    } else {
        throw {id: 404, msg: "Autor não encontrado"};
    }
}

function buscaLivrosNome(nome){
    if(nome){
        return bookRepository.buscaLivrosNome(nome);
    } else {
        throw {id: 404, msg: "Livro não encontrado"};
    }
}

function buscaAutorNome(nome){
    if(nome){
        return bookRepository.buscaAutorNome(nome);
    } else {
        throw {id: 404, msg: "Livro não encontrado"};
    }
}