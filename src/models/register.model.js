import mongoose  from "mongoose";

const registerCollection = 'registers'

const registerSchema = new mongoose.Schema({
  name_complete: String,
  email:  String,
  tel_oficina: Number,
  num_cel: Number,
  nom_emp: String,
  afil_cmic: String,
  del_cmic: String,
  int_afil: String,
  handicap: String,
  acompanante:String,
  name_acompanante:String,
  talla: String,
  carrito: String,
  factura: String,
  razon_social: String,
  rfc_fact: String,
  dom_fact: String,
  cod_Fiscal: Number,
  cfdi_fact: String,
  regFiscal_fact: String,
  email_fact: String,
  create_date:Date
});

mongoose.set('strictQuery',false)

const registerModel = mongoose.model(registerCollection, registerSchema);

export default registerModel