const nodemailer = require('nodemailer');

 const sendEmail = async ()=>{

//constante de configuracion del correo y puerto del que se enviaran los correos 
    
    let transporter = {
        host: 'smtp.gmail.com',
        port: 587,
    // Se cambiara esta parte por variables de entorno (.env)
        auth: {
            user: 'bytemepf@gmail.com',
            pass: 'watdzbhmsmnxcenp'
        }
    }

    //En esta variable message se pondra la plantilla de Stripo (en caso tal se modularizara para mayor orden)
    let message = {
        from: 'bytemepf@gmail.com',
        //Se cambiara por el correo al cual se debera enviar el message
        to: 'cdvallesb7@gmail.com',
        subject: 'Test one',
        text: 'relevant info about email of shopping',
    }

     const transport = nodemailer.createTransport(transporter);

     const info = await transport.sendMail(message);

     console.log(info)
}

module.exports = {
    sendEmail,
}