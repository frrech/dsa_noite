const express = require('express')
const router = express.Router()
const userController = require('../controller/user_controller');

router.get('/', userController.listar)
router.post('/', userController.inserir)

module.exports = router