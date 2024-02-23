import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: "cmicregistroform@gmail.com",
    pass: "cvxgvuomeihmxwhc",
  },
  tls: {
    rejectUnauthorized: false, // Aceptar certificados autofirmados
  },
});


export default transport