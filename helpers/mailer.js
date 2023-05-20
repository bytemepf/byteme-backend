const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
    // Se cambiara esta parte por variables de entorno (.env)
        auth: {
            user: 'bytemepf@gmail.com',
            pass: 'watdzbhmsmnxcenp',
        }
});

transporter.verify().then(() => {
    console.log('Ready for sends')
})