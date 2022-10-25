const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/create", usuariosController.create);
router.post("/login", usuariosController.login);


module.exports = router;