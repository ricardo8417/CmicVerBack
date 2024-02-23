import mongoose  from "mongoose";

const registerCollection = 'registers'

const registerSchema = new mongoose.Schema({
 name_complete: String,
 email:{
    type:String,
    unique:true
 },
 tel_oficina:Number,
 num_cel:Number,
 nom_emp:String,
 afil_cmic:String,
 del_cmic:String,
 int_afil:String,
 handicap:String,
 talla:String,
 factura:String,
razon_social:String,
rfc_fact:String,
dom_fact:String,
cfdi_fact:String,
regFiscal_fact:String,
email_fact:String,

})

mongoose.set('strictQuery',false)

const registerModel = mongoose.model(registerCollection, registerSchema);

export default registerModel