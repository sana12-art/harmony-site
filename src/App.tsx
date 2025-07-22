import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import DevisChoix from "./components/DevisChoix";
import Formulaire from "./components/Formulaire";
import DevisTypes from "./components/DevisTypes";
import DevisPage from './components/DevisPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/devis" element={<DevisChoix />} />
        <Route path="/devis/:projet/:service" element={<Formulaire />} />
         <Route path="/devis/:projet" element={<DevisTypes />} />
         <Route path="/devis-page" element={<DevisPage />} />
        <Route
          path="/"
          element={<>
            <main>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
            
            </main>
            <Footer />
            <BackToTop />
          </>} />

      </Routes>
    </Router>
  );
}

export default App;
