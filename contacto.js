const { Router } = require ("express");
const contacto = new Router ();
const nodemailer = require ('nodemailer');

contacto.get("/contacto", (req, res) => {
     res.render("contacto");
})

contacto.post("/send-email", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:false, 
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

let mailOptions = {
    to: "cmartinez.cn@gmail.com",
    from: "Remitente",
    subject: `${asunto}`,
    html: `<h1> Mensaje de ${nombre} ${apellido} para Mundo cafe: ${mensaje}, Contacto: ${email} </h1>`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        res.status(500).send(error.message);
    }else{
        res.render('enviado');
        res.status(200).jsonp(reqbody);
    }
})    
})

module.exports = contacto;

