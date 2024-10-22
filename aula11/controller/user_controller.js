const userService = require('./service/user_service');

function listar(req, res) {
    res.json(userService.listar())
}

function inserir(req, res){
    const user = req.body;
    try{
      const userInserido = userService.inserir(user);
      res.status(201).json(userInserido);
    }
    catch(err){
      res.status(err.id).json(err);
    }   
}
