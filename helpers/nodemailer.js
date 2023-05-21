const nodemailer = require('nodemailer');
require('dotenv').config();
import { User } from '../models';

module.exports = (app)=>{

    app.post("/mailpurcharse", (req, res) =>{
        if(req.body.email === ""){
            res.status(400).send("email required")
        }
        console.error(req.body.email)

        User.findOne({
            where: {
                email: req.body.email
            },
        }).then((user) => {
            if(user === null){
                console.error("email not in database");
                res.status(403).send("email not in db")
            } else {
    //constante de configuracion del correo y puerto del que se enviaran los correos  
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    auth: {
                        user: `${process.env.EMAIL_ADDRESS}`,
                        pass: `${process.env.EMAIL_PASSWORD}`
                    }
                });

    //En esta variable message se pondra la plantilla de Stripo (en caso tal se modularizara para mayor orden)
                let message = {
                    from: 'bytemepf@gmail.com',
                    to: `${user.email}`,
                    subject: 'purchase resume',
                    //Aqui debe traerse la infomacion de la compra para enviarla como cuerpo del correo     
                    text: 'relevant info about email of shopping',
                };
                console.log('sending email');
                
                transporter.sendMail(mailOptions, (error, response) =>{
                    if(error) {
                        console.error('There was an error', error);
                    } else {
                        console.log('here is the response', response);
                        res.status(200).json('recovery email sent')
                    }
                });
            }
        })
    })
}
