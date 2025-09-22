import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react'; 
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import CrestmontBGC from './components/sections/projects/crestmont-bgc';
import SHPEWebsite from './components/sections/projects/shpe-website';
import { UFCDataMining } from './components/sections/projects/ufc-data-mining';
import BrownCountyHumaneSociety from './components/sections/projects/bchs';



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}>
        <Router basename="/Portfolio">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/crestmont-bgc" element={<CrestmontBGC />} />
            <Route path="/projects/shpe" element={<SHPEWebsite />} />
            <Route path="/projects/ufc-data-mining" element={<UFCDataMining />} />
            <Route path="/projects/bchs" element={<BrownCountyHumaneSociety />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
