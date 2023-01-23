import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Hero from "./componentes/Hero";
import NavBar from "./componentes/NavBar";
import Projects from "./componentes/Projects";
import Diseño from "./componentes/Diseño"


function App() {
  return (
    <div className="w-full h-full font-montserrat bg-black">
    
      <NavBar/>
   
      <Hero/>

      <About/>
 
      <Projects/>

      <Contact/>
      {/* footer  */}
    
    </div>
  );
}

export default App;



