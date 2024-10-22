const usuarioRepository = require('..repository/user_repository');

function listar(){
    return usuarioRepository.listar();
}

function inserir(usuario){
    if(usuario && usuario.nome && usuario.categoria && usuario.preco){
        return usuarioRepository.inserir(usuario);
    }
    else{
        throw {id: 400, msg: "Usuário sem dados completos"};
    }
}