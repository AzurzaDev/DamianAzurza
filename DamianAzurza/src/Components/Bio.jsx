const Bio = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src="src/assets/paraBio.jpg" // Reemplaza con la ruta correcta
            alt="Bio"
            className="w-4/5 h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
  
        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate neque non libero feugiat, sed posuere sem consequat. Proin efficitur dolor id lacus laoreet, eget lacinia ligula lacinia.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Mauris a sapien at libero gravida consequat. Nullam ornare diam et justo viverra, ut feugiat nunc venenatis.
          </p>
        </div>
      </div>
    );
  };
  
  export default Bio;
  
  