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
import MyBusiness from "./components/MyBusiness"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/devis" element={<DevisChoix />} />
        <Route path="/mon-projet" element={<MyBusiness />} />
        <Route
          path="/devis/:projet/:service"
          element={<FormulaireWrapper />}
        />

        <Route path="/devis/:projet" element={<DevisTypes />} />
        <Route path="/devis-page" element={<DevisPage />} />

        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
      </Routes>
    </Router>
  );
}

import { useParams } from 'react-router-dom';
function FormulaireWrapper() {
  const { projet, service } = useParams();
  return <Formulaire projet={projet} service={service} />;
}

export default App;
