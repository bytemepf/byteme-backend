const nodemailer =  require("nodemailer");


async function nodemailerPay(recipient, mensaje, total) {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`
        }
    });

    
    const mail = await transporter.sendMail({
      from: 'bytemepf@gmail.com',
      to: recipient,
      subject: `Orden N°: -${id}- ✔`, 
      text: mensaje, 
      html: `<center>
|              <div width=300px style="font-size: 2rem; background-color: #dfced5; height: 65rem; width: 83rem;"> 
                <br>
                <h3>Hola ${recipient} </h3> 
                <span> Procesamos correctamente tu pago </span> 
                <br>
                <h3>Tu compra</h3>
                <table>
                  <tr>
                    <th style= "text-align: center">Nombre</th>
                    <th style= "text-align: center">Cantidad</th>
                    <th style= "text-align: center">Precio</th>
                    <th style= "text-align: center">Sub total</th>
                  </tr>  
                  ${mensaje}
                </table>
                <h2>$${total}</h2>
                <br>
                <label>Gracias, Equipo BYTE ME</label>
              </div>
            </center>`
    });
    console.log(mail, '!!!!!');
  }



  module.exports = {
    nodemailerPay,
  }