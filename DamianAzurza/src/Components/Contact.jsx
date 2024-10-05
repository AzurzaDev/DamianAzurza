import paraContacto from '../assets/paraContacto.png'


const Contact = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
        {/* Izquierda - Texto con imagen de fondo */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${paraContacto})` }} 
        >
          <div className="bg-white/70 p-8"> {/* Capa semitransparente para que el texto sea más legible */}
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultricies tellus convallis praesent morbi viverra sit semper.
            </p>
  
            {/* Input de subscripción */}
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <input
                type="email"
                placeholder="Suscribirse"
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900">
                Enviar
              </button>
            </div>
          </div>
        </div>
  
        {/* Derecha - Formulario */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900">
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  