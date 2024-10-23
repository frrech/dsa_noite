const loginService = require('./service/login_service')

function verificarAcesso(req, res, next){
    try{
        const token = req.get("token");
        loginService.validarToken(token);
        next();
    } catch(err){
        throw { id: 401, msg: "Token inválido"};
    }
}

module.exports = {verificarAcesso};