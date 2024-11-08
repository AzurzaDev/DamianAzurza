const nodemailer = require('nodemailer');
const { Contacto } = require('./data');

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true para el puerto 465, false para otros puertos
  auth: {
    user: 'azurzadev@gmail.com', // Tu correo de Gmail
    pass: 'pxrj zrox fjlu srzv' // Tu contraseña de aplicación
  }
});

// Función para enviar el correo
const sendEmail = async (contact, notifyAdmin = false) => {
  let mailOptions;

  if (notifyAdmin) {
    // Correo que recibirás tú con los detalles de la consulta del cliente
    mailOptions = {
      from: 'azurzadev@gmail.com',
      to: 'azurzadev@gmail.com', // Tu dirección de correo para recibir consultas
      replyTo: contact.email,    // Email del cliente para responder directamente
      subject: 'Nueva consulta de contacto',
      html: `
        <p>Tienes una nueva consulta de contacto:</p>
        <ul>
          <li><strong>Nombre:</strong> ${contact.name}</li>
          <li><strong>Email:</strong> ${contact.email}</li>
          <li><strong>Teléfono:</strong> ${contact.phone}</li>
          <li><strong>Suscripto:</strong> ${contact.isSuscripto ? 'Sí' : 'No'}</li>
          <li><strong>Mensaje:</strong> ${contact.message}</li>
        </ul>
      `
    };
  } else {
    // Enviar notificación de show a suscriptores
    const saludo = contact.name ? `Hola ${contact.name},` : `Hola ${contact.email},`;
    mailOptions = {
      from: 'azurzadev@gmail.com',
      to: contact.email, // Correo del suscriptor
      subject: 'Nuevo Show Disponible',
      html: `
        <p>${saludo}</p>
        <p>Hay un nuevo show disponible. Revisa nuestra página para más detalles!</p>
        <p><a href="https://damian-azurza.vercel.app/" style="color: blue; text-decoration: underline;">Visitar la Página</a></p>
        <p>¡Esperamos verte pronto!</p>
        <img src="https://res.cloudinary.com/dixhywv86/image/upload/v1729712477/a1ff9gtrksxxc3x5li7e.png" alt="Damián Azurza" style="max-width: 100%; height: auto;">
      `
    };
  }

  await transporter.sendMail(mailOptions);
};

// Función para notificar a todos los suscriptores de un nuevo show
const notifySubscribedContacts = async () => {
  try {
    const contacts = await Contacto.findAll({ where: { isSuscripto: true } });
    await Promise.all(contacts.map(contact => sendEmail(contact, false))); // notifyAdmin es false aquí
  } catch (error) {
    console.error('Error al enviar correos a contactos:', error);
  }
};

module.exports = { sendEmail, notifySubscribedContacts };
