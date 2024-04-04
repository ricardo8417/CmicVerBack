import registerModel from "../models/register.model.js";
import transport from "../config/mailer.config.js";
import __dirname from '../utils.js'
 class registerService {
constructor(){

}

registerForm= async (data) =>{

     try{
     
      const newRegister = new registerModel({...data,create_date: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000),});
      if(newRegister){
     await newRegister.save()
const result = await transport.sendMail({
  from: "cmicregistroform@gmail.com",
  to: `${data.email}`,
  subject: "Registro Exitoso",
  html: `
        <div>
        <img src="cid:image2" />
    <p> Gracias por tu Registro al 2do torneo de Golf. </p>
   <h2>Costo de Inscripción </h2>

   <p>$4,000 Hasta el 30 de Abril del 2024. </p>
   <p>$5,000 del 1 de Mayo al 30 d Mayo. </p>
   <p>$5,500 del 1 al 5 de Junio.</p>
   <p><strong>Si requiere factura los costos son mas IVA.</strong></p>
<p><strong>Si usted solicitó la renta de un carrito de golf, recuerde que tiene un costo adicional de $600.00 mas IVA si requiere factura.</strong></p>

    <p>Para completar tu registro favor de realizar tu pago a la brevedad a esta cuenta:</p>
 <p>Razón Social: CAMARA MEXICANA DE LA INDUSTRIA DE LA CONSTRUCCION.</p>   
<p>Banco: BANAMEX.</p>
<p>Cuenta: 1503389.</p>
<p>Sucursal: 655.</p>
<p>Clabe: 002849065515033892.</p>
<p>Referencia: PAGO 2DO. TORNEO DE GOLF. </p>
<p>Y envía tu comprobante de pago al correo:
asistente_presidencia@cmicveracruz.org o al WhatsApp copiando el siguiente enlace al navegador: https://w.app/cmicveracruz 
poniendo en  el asunto <strong> Pago inscripción a 2o. Torneo de Golf CMIC Veracruz</strong>. </p>
<p>Si tienes dudas llámanos a los teléfonos 2299214490-92 ext 101. ó al whatssap: https://w.app/cmicveracruz </p>
<p>Gracias por tu atención y estamos para apoyarte.</p>
<p>Atte:</p>
<p>CMIC Veracruz Puerto.</p>
<p><strong> <span style="text-decoration:underline;color:gray;">Si su registro es después del 15 de Abril, la talla de su camisa estará sujeta a disponibilidad.</span></strong></p>

<p><strong>Nota: Favor de no responder a este correo.</strong> </p>
        </div>
    `,
  attachments: [
    {
      filename: "golf2.jpg",
      path: `${__dirname}/images/golf2.jpg`,
      cid: "image2",
    },
  ],
});
return (result)
      }else{
        return ("No se pudo enviar el formulario")
      }


    }catch(e){
        throw e
      
    }

}

}

export default registerService