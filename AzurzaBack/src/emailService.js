const nodemailer = require('nodemailer');

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true para el puerto 465, false para otros puertos
    auth: {
      user: 'azurzadev@gmail.com', // Tu correo de Gmail
      pass: 'pxrj zrox fjlu srzv' // Tu contraseña de Google o contraseña de aplicación
    }
  });

// Función para enviar el correo
const sendEmail = async (contact) => {
  const mailOptions = {
    from: contact.email, // El correo del remitente
    to: "azurzadev@gmail.com", // Tu dirección de correo electrónico
    subject: 'Nuevo mensaje de contacto', // Asunto del correo
    text: `
      Nombre: ${contact.name}
      Email: ${contact.email}
      Teléfono: ${contact.phone}
      Suscripción: ${contact.isSuscripto ? 'Sí' : 'No'}
    `, // Contenido del correo
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
