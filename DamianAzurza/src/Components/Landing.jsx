import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";
import ImagenDebajoCarrousel from './ImagenDebajoCarrousel'
import Shows from "./Shows";
import Projects from './Projects'
import Services from './Services'
import Bio from './Bio'
import Contact from './Contact'

const Landing = () => {
  return (
    <div className="landing-container">
       <Navbar/>
       <EscuchaMiMusica/>
       
       <Shows/>
       <Projects/>
       <Services/>
       <Bio/>
       <Contact/>


    </div>
  );
};

export default Landing;