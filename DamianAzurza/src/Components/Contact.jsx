import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSend } from 'react-icons/fi'; 
import { createContact } from '../redux/Actions/actions'; 
import paraContacto from '../assets/paraContacto.png';
import { toast } from 'react-toastify'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isSuscripto: false,
  });

  const [suscriptionEmail, setSuscriptionEmail] = useState('');  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSuscriptionChange = (e) => {
    setSuscriptionEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Por favor, complete los campos obligatorios.');
      return;
    }

    try {
      await dispatch(createContact(formData));
      
      if (formData.isSuscripto) {
        toast.success('¡Ya estás suscripto!');
      } else {
        toast.success('Mensaje enviado con éxito.');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        isSuscripto: false,
      });

    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje.');
    }
  };

  const handleSuscriptionSubmit = async () => {
    if (!suscriptionEmail) {
      toast.error('Por favor, ingrese su email para suscribirse.');
      return;
    }

    try {
      await dispatch(createContact({ email: suscriptionEmail, isSuscripto: true }));
      toast.success('¡Ya estás suscripto!');
      setSuscriptionEmail('');
    } catch (error) {
      toast.error('Hubo un error al suscribirse.');
    }
  };

  return (
    <div 
      className="relative flex flex-col md:flex-row items-center justify-between bg-white p-8 md: m-8"
      style={{ backgroundImage: `url(${paraContacto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Izquierda - Texto */}
      <div className="relative w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-8">
        <h2 className="text-3xl font-bold mb-2 text-fondoServicios font-Montserrat">Contacto</h2>
        <p className="text-fondoServicios font-Montserrat mb-4">
          Para contrataciones de música en vivo, producción o dirección musical.
        </p>
        <p className="text-fondoServicios font-Montserrat mb-4">
          DAMIÁN AZURZA
        </p>
        <p className="text-fondoServicios font-Montserrat mb-2">
          damianazurza@gmail.com
        </p>
        <p className="text-fondoServicios font-Montserrat mb-8">
          3415898335
        </p>

        {/* Input de suscripción independiente */}
        <div className="flex items-center space-x-2 justify-center md:justify-start">
          <input
            type="email"
            name="suscriptionEmail"
            placeholder="Suscribirte y te cuento mis novedades"
            value={suscriptionEmail}
            onChange={handleSuscriptionChange}
            className="w-64 px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={handleSuscriptionSubmit}
            className="px-4 py-2 bg-fondoServicios font-Montserrat text-white rounded-lg shadow-lg hover:bg-gray-900 flex items-center"
          >
            Enviar <FiSend className="ml-2" />
          </button>
        </div>
      </div>

      {/* Derecha - Formulario de contacto */}
      <div className="relative w-full md:w-1/2 p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-fondoMas font-Montserrat border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isSuscripto"
              checked={formData.isSuscripto}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-fondoServicios"
            />
            <label className="text-fondoServicios font-Montserrat">Suscribirse a novedades</label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-fondoServicios font-Montserrat text-white rounded-lg shadow-lg hover:bg-gray-900 flex items-center justify-center"
          >
            Enviar <FiSend className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
