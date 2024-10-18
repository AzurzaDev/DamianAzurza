import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";
import Shows from "./Shows";
//import Projects from './Projects'
import SeccionAnimada from "./SeccionAnimada";
import Services from './Services';
import Bio from './Bio';
import Contact from './Contact';

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
       <div className="mb-8">
         <SeccionAnimada />
       </div>
       <div className="mb-8">
         <Services />
       </div>
       <div className="mb-8">
         <Bio />
       </div>
       <div className="mb-8">
         <Contact />
       </div>
    </div>
  );
};

export default Landing;

