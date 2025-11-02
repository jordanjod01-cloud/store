import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF8F5] text-gray-900">
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Products scrollY={scrollY} />
      <Gallery scrollY={scrollY} />
      <Testimonials scrollY={scrollY} />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
