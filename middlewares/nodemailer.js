const nodemailer =  require("nodemailer");


async function nodemailerPay(recipient, total) {

  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
          user:` bytemepf@gmail.com`,//`${process.env.EMAIL_ADDRESS}`,
          pass: `watdzbhmsmnxcenp`//`${process.env.EMAIL_PASSWORD}`
      }
  });



  const mail = await transporter.sendMail({
    from: 'bytemepf@gmail.com',
    to: recipient,
    subject: `Compra ✔` ,

    html: `<center>
|              <div width=300px style="font-size: 2rem; background-color: #dfced5; height: 65rem; width: 83rem;"> 
              <br>
              <h3>Hola ${recipient} </h3> 
              <br>

              <h3>Recibimos correctamente tu compra</h3>
              <h2>$${total}</h2>
              <br>
              <label>Muchas gracias!! Equipo BYTE ME</label>
            </div>
          </center>`
  });
  console.log(mail, '!!!!!');
} 



  module.exports = {
    nodemailerPay,
  }