import About from "./componentes/About";
import Hero from "./componentes/Hero";
import NavBar from "./componentes/NavBar";
import Projects from "./componentes/Projects";


function App() {
  return (
    <div className="w-full h-full font-montserrat ">

      <NavBar/>
   
      <Hero/>

      <About/>
 
      <Projects/>
      
      {/* contact */}
      {/* footer  */}
    
    </div>
  );
}

export default App;



