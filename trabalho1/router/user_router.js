const express = require('express');
const router = express.Router();
const userController = require("../controller/user_controller");

router.get('/', userController.listar);
router.get('/:nome', userController.buscaUserNome);
router.post('/:id', userController.cadastraUser);

module.exports = router;