const nodemailer = require('nodemailer');
const { Contacto } = require('./data');
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
    from: 'azurzadev@gmail.com', // Cambia esto a tu dirección
    to: contact.email,
    subject: 'Nuevo Show Disponible',
    html: `
    <p>Hola ${contact.name},</p>
    <p>Hay un nuevo show disponible. Revisa nuestra página para más detalles!</p>
    <p><a href="https://damian-azurza.vercel.app/" style="color: blue; text-decoration: underline;">Visitar la Página</a></p>
    <p>¡Esperamos verte pronto!</p>
  `
};

  await transporter.sendMail(mailOptions);
};
const notifySubscribedContacts = async () => {
  try {
    const contacts = await Contacto.findAll({ where: { isSuscripto: true } });
    await Promise.all(contacts.map(contact => sendEmail(contact)));
  } catch (error) {
    console.error('Error al enviar correos a contactos:', error);
  }
};

module.exports = { sendEmail, notifySubscribedContacts };
