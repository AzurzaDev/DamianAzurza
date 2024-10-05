import debajoSlider from '../assets/debajoSlider'

const FixedImage = () => {
    return (
      <div className="w-full h-[50px] md:h-[100px] lg:h-[300px]">
        <img
          src={debajoSlider}
          alt="Imagen Fija"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };
  
  export default FixedImage;
  