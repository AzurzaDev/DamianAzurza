import debajoSlider from '../assets/debajoSlider.png';

const FixedImage = () => {
    return (
        <div className="w-full h-[50px] md:h-[100px] lg:h-[300px]">
            <img
                src={debajoSlider}
                alt="Imagen Fija"
                className="w-full h-full lg:object-fill object-cover xl:h-56 xl:object-fill"
            />
        </div>
    );
};

export default FixedImage;



  