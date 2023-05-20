import crypto from 'crypto';
import { User } from '../../models';


require('dotenv').config();

const nodemailer = require('nodemailer')

module.exports = (app) => {
    app.post('/forgotPassword', (req, res)=>{
        if(req.body.email === ''){
            res.status(400).send('email required');
        }
        console.error(req.body.email);
        User.findOne({
            where: {
                email:  req.body.email,
            },
        }).then((user) =>{
            if(user === null){
                console.error('email not in database');
                res.status(403).send('email not in db')
            } else {
                const token = crypto.randomBytes(20).toString('hex');
                user.update({
                    resetPasswordToken: token,
                    resetPasswordExpires: Date.now() + 3600000,
                });

                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    auth: {
                        user: `${process.env.EMAIL_ADDRESS}`,
                        pass: `${process.env.EMAIL_PASSWORD}`,
                    }
                });

                const message = {
                    from: 'bytemepf@gmail.com',
                    to: `${user.email}`,
                    subject: 'Reset Password',
                    text:
                        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
                        + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
                        + `http://localhost:3031/reset/${token}\n\n`
                        + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
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
        });
    });
};