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
const Landing = () => {
  return (
    <div className="landing-container">
       <Navbar />
       <div className="mb-8">
         <EscuchaMiMusica />
       </div>
       <div className="mb-8">
         <Shows />
       </div>
       {/* <div className="mb-8"> */}
       {/*   <Projects /> */}
       {/* </div> */}
       <div className="mb-2">
         <SeccionAnimada />
       </div>
       <div className="mb-2">
         <Services />
       </div>
       <div className="mb-2">
         <Bio />
       </div>
       <div className="mb-2">
         <VideosComponent />
       </div>
       <div className="mb-2">
         <FotosComponent />
       </div>
       <div className="mb-2">
         <Contact />
       </div>
      
    </div>
  );
};

export default Landing;

