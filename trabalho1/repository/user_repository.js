/**
 * Autenticação do usuário: usuário da biblioteca possui um
usuário e uma senha para realizar autenticação (já pré-definidos
no banco de dados).
 * Cadastro de clientes: cliente contém como informação a
matrícula, o nome e telefone.
 * Buscas
 */

class User{
    constructor(matricula, nome, telefone, senha){
        this.matricula = matricula;
        this.nome = nome;
        this.telefone = telefone;
        this.__senha = senha;
    }
}

let arr_user = [];
let id_user = 0;

function cadastraUser(user){
    if(!user || !user.nome || !user.telefone || !user.__senha){
        return;
    }
    user.matricula = id_user++;
    arr_user.push(autor);
    return user;
}

function listar(){
    return arr_user.map((user) => {
        return{
            matricula: user.matricula,
            nome: user.nome,
            telefone: user.telefone
        }
    });
}

function buscaUserNome(nome){
    return arr_user.find((user) =>{
        return user.nome === nome;
    });
}

module.exports = {
    cadastraUser, listar, buscaUserNome, User
};