import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";
import ImagenDebajoCarrousel from './ImagenDebajoCarrousel'
import Shows from "./Shows";

const Landing = () => {
  return (
    <div className="landing-container">
       <Navbar/>
       <EscuchaMiMusica/>
       <ImagenDebajoCarrousel/>
       <Shows/>
    </div>
  );
};

export default Landing;