import EscuchaMiMusica from "./EscuchaMiMusica";
import Navbar from "./Navbar";

import Shows from "./Shows";
//import Projects from './Projects'
SeccionAnimada
import Services from './Services'
import Bio from './Bio'
import Contact from './Contact'
import SeccionAnimada from "./SeccionAnimada";

const Landing = () => {
  return (
    <div className="landing-container">
       <Navbar/>
       <EscuchaMiMusica/>
       
       <Shows/>
       
       {/* <Projects/> */}
        
       <SeccionAnimada/>
       <Services/>
       <Bio/>
       <Contact/>


    </div>
  );
};

export default Landing;