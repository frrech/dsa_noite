class Usuario{
    constructor(nome, email, senha, id){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.id = id;
    }
}

let id_usuario = 0;
let array_usuarios = [];

function inserir(usuario){
    if(!usuario || !usuario.nome || !usuario.email 
        || !usuario.senha) {
            return;
    }
    usuario.id = id_usuario++;
    array_usuarios.push(usuario);
    return usuario;
}

function listar(){
    return array_usuarios.map((usuario) => {
        return {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
        }
    });
}

function buscarEmail(email){
    return array_usuarios.find((usuario) => {
        return usuario.email === email
    });
  }

function main(){
    const user1 = inserir({
        nome: "fulano",
        email: "fulanomail@mail.com",
        senha: "12345"
    });
    const user2 = inserir({
        nome: "sicrano",
        email: "sicranomail@mail.com",
        senha: "123456"
    });
    console.log(listar());
}

main()