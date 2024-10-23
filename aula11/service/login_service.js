const usuarioRepository = require('./repository/user_repository')
const jwt = require("jsonwebtoken")
const PALAVRA_CHAVE = "abc123"
function verificarLogin(usuarioLogin){
    if (!usuarioLogin || !usuarioLogin.email || !usuario.login || !usuario.senha || !usuario.id){
        throw { id: 401, msg: "Usuário ou senha inválidos"};
    }
    let usuario = usuarioRepository.buscarEmail(usuarioLogin.email);
    if(usuario){
        if(usuario.senha === usuarioLogin.senha){
            let token = jwt.sign({userId: usuario.id},PALAVRA_CHAVE, {expiresIn: '1h'});
            return token;
        }
    }
    throw {id: 401, msg: "Usuário ou senha inválidos"}
}

function validarToken(token){
    try{
        jwt.verify(token, PALAVRA_CHAVE);
    } catch(err){
        console.log("Erro no token", err);
        throw { id: 401, msg: "Token inválido"};
    }
}

module.exports = {verificarLogin, validarToken};