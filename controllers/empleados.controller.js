const Empleado = require("../models/empleados.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = (req, res) => {
  let empleado = new Empleado({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    maíl: req.body.maíl,
    dirección: req.body.dirección,
  });

  empleado.save((err) => {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al guardar el empleado";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El empleado se guardó correctamente";
    res.json(response);
  });
};

exports.find = (req, res) => {
  Empleado.find((err, empleados) => {
    res.json(empleados);
  });
};

exports.findOne = (req, res) => {
  Empleado.findOne({ _id: req.params.id }, (err, empleado) => {
    res.json(empleado);
  });
};

exports.update = (req, res) => {
  let empleado = ({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    maíl: req.body.maíl,
    dirección: req.body.dirección,
  });

  Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, (err) => {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al modificar el empleado";
      res.json(response);
      return;
    }

    response.exito = true;
    response.msg = "El empleado se guardó correctamente";
    res.json(response);
  });
};

exports.remove = (req, res) => {
    Empleado.findByIdAndRemove({_id: req.params.id}, (err) =>{
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar el empleado";
            res.json(response);
            return;
          }
      
          response.exito = true;
          response.msg = "El empleado se elimino correctamente";
          res.json(response);
    })
};
