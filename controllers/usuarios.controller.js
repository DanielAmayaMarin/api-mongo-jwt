const Usuario = require("../models/usuarios.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

let response = {
    msg: "",
    exito: false,
  };

exports.login = (req, res) => {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.contraseña)
    .digest("hex");

  Usuario.findOne(
    { usuario: req.body.usuario, contraseña: hashedpass },
    (err, usuario) => {
      let response = {
        token: null,
      };

      if (usuario !== null) {
        response.token = jwt.sign(
          {
            id: Usuario.id,
            usuario: Usuario.usuario,
          },
          "__recret__"
        );
      }

      res.json(response);
    }
  );
};

exports.create = (req, res) => {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.contraseña)
    .digest("hex");

  let usuario = new Usuario({
    usuario: req.body.usuario,
    contraseña: hashedpass,
  });

  usuario.save((err) => {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al guardar el usuario";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El usuario se guardó correctamente";
    res.json(response);
  });
};
