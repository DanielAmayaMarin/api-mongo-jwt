const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  apellido_p: { type: String, required: true, max: 40 },
  apellido_m: { type: String, required: true, max: 40 },
  telefono: { type: String, required: true, max: 15 },
  maíl: { type: String, required: true, max: 70 },
  dirección: { type: String, required: true, max: 150 },
});

module.exports = mongoose.model("empleados", EmpleadosSchema);
