const userRepository = require("../repository/user_repository");

function cadastraUser(user){
    if(!user && !user.nome && !user.telefone && !user.__senha){
        return userRepository.cadastraUser(user);
    } else {
        throw {id: 400, msg: "Usuário sem dados completos"};
    }
}

function listar(){
    return userRepository.listar();
}

function buscaUserNome(nome){
    if(nome){
        return userRepository.buscaUserNome(nome);
    } else {
        throw {id: 404, msg: "Usuário não encontrado"};
    }
}

module.exports = {
    cadastraUser, listar, buscaUserNome
};