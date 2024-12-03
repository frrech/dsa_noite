const express = require('express');
const router = express.Router();
const bookController = require("../controller/book_controller");

router.get('/l', bookController.listaLivro);
router.get('/a', bookController.listaAutor);
router.delete('/l/:id_livro', bookController);
router.delete('/a/:id_autor', bookController.listaAutor);
router.post('/l/:id_livro', bookController.cadastraLivro);
router.post('/a/:id_autor', bookController.cadastraAutor);

modules.export = router;