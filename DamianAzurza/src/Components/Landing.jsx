import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";
import Shows from "./Shows";
//import Projects from './Projects'
import SeccionAnimada from "./SeccionAnimada";
import Services from './Services';
import Bio from './Bio';
import Contact from './Contact';
import VideosComponent from "./VideosComponent";
import FotosComponent from "./FotosComponent";
import Footer from "./Footer";
import LogoCarousel from "./LogoCarousel";


const Landing = () => {
  return (
    <div className="landing-container "> {/* Ajustar el padding-top para dejar espacio para el Navbar */}
       <Navbar />
       <div className="">
         <EscuchaMiMusica />
       </div>
       <div className="mb-2">
         <Shows />
       </div>
       <div className="mb-2">
         <SeccionAnimada />
       </div>
       <div className="mb-2">
         <Services />
       </div>
       <div >
         <Bio />
       </div>
       <div className="">
         <VideosComponent />
       </div>
       <div className="mb-2">
         <FotosComponent />
       </div>
       <div className="mb-2">
         <Contact />
       </div>
       <div className="mb-2">
         <LogoCarousel />
       </div>
      <Footer />
    </div>
  );
};

export default Landing;


