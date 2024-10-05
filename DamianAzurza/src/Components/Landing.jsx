import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";
import ImagenDebajoCarrousel from './ImagenDebajoCarrousel'
import Shows from "./Shows";
import Projects from './Projects'
import Services from './Services'

const Landing = () => {
  return (
    <div className="landing-container">
       <Navbar/>
       <EscuchaMiMusica/>
       <ImagenDebajoCarrousel/>
       <Shows/>
       <Projects/>
       <Services/>

    </div>
  );
};

export default Landing;