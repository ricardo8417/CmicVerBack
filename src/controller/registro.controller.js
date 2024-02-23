import registerService  from "../services/registro.service.js";

const RegisterService = new registerService()
export const registerForm = async(req, res) =>{
    try{
     const data = {
       name_complete: req.body.name_complete,
       email: req.body.email,
       tel_oficina: req.body.tel_oficina,
       num_cel: req.body.num_cel,
       nom_emp: req.body.nom_emp,
       afil_cmic: req.body.afil_cmic,
       del_cmic: req.body.del_cmic,
       int_afil: req.body.int_afil,
       handicap: req.body.handicap,
       talla: req.body.talla,
       factura: req.body.factura,
       razon_social: req.body.razon_social,
       rfc_fact: req.body.rfc_fact,
       dom_fact: req.body.dom_fact,
       cfdi_fact: req.body.cfdi_fact,
       regFiscal_fact: req.body.regFiscal_fact,
       email_fact: req.body.email_fact,
     };

     const newRegister = await RegisterService.registerForm(data)
     if(newRegister){
        res.status(201).send({success: true, message:"Registro Enviado Correctamente"})
     }else{
        res.status(400).send({success: false, message: newRegister})

     }

    }catch (e){
 res.status(500).send({success: false, message: e.message})
    }

}