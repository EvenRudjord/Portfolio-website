import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js'; 
import { Banner } from "./components/Banner.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { OmMeg } from './components/OmMeg.js';


function App() {
  return ( 
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <OmMeg />
    </div>
  );
}

export default App;
