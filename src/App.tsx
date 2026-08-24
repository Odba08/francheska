import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide } from './components/HeroSlide';
import { AboutSlide } from './components/AboutSlide';
import { ServicesSlide } from './components/ServicesSlide';
import { BehindFeedSlide } from './components/BehindFeedSlide';
import { PortfolioSlide } from './components/PortfolioSlide';
import { ContactSlide } from './components/ContactSlide';
import { Navbar } from './components/Navbar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Background Colors corresponding to each slide section
  const bgColors = [
    '#F5F1EB', // Inicio (Warm Beige)
    '#EAE4DC', // Sobre Mí (Sand Beige)
    '#FAF8F5', // Servicios (Light Cream)
    '#EAE4DC', // Herramientas (Sand Beige)
    '#F5F1EB', // Proyectos (Warm Beige)
    '#E2D9D5'  // Contacto (Metallic Grey-Beige)
  ];

  // Dynamic Background Transition
  useEffect(() => {
    document.body.style.backgroundColor = bgColors[activeSlide];
  }, [activeSlide]);

  // Wheel scroll translation: vertical scroll -> horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Sync active slide index based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const width = container.clientWidth;
      const scrollPos = container.scrollLeft;
      const index = Math.round(scrollPos / width);
      if (index !== activeSlide && index >= 0 && index < 6) {
        setActiveSlide(index);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeSlide]);

  const navigateTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth;
    container.scrollTo({
      left: index * width,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  return (
    <>
      {/* Background grain texture for premium print feel */}
      <div className="bg-grain"></div>

      {/* Main Navbar */}
      <Navbar activeSlide={activeSlide} onNavigate={navigateTo} />

      {/* Floating Arrows */}
      <button 
        className="nav-arrow prev" 
        onClick={() => navigateTo(activeSlide - 1)}
        disabled={activeSlide === 0}
        aria-label="Anterior"
      >
        <FiChevronLeft size={24} />
      </button>
      
      <button 
        className="nav-arrow next" 
        onClick={() => navigateTo(activeSlide + 1)}
        disabled={activeSlide === 5}
        aria-label="Siguiente"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Bottom dots indicator */}
      <div className="slider-dots">
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <button
            key={idx}
            className={`dot ${activeSlide === idx ? 'active' : ''}`}
            onClick={() => navigateTo(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Horizontal snapping slider container */}
      <div className="horizontal-scroll-container" ref={containerRef}>
        <section className={`slide-section ${activeSlide === 0 ? 'active' : ''}`}>
          <HeroSlide onNext={() => navigateTo(1)} />
        </section>

        <section className={`slide-section ${activeSlide === 1 ? 'active' : ''}`}>
          <AboutSlide />
        </section>

        <section className={`slide-section ${activeSlide === 2 ? 'active' : ''}`}>
          <ServicesSlide />
        </section>

        <section className={`slide-section ${activeSlide === 3 ? 'active' : ''}`}>
          <BehindFeedSlide />
        </section>

        <section className={`slide-section ${activeSlide === 4 ? 'active' : ''}`}>
          <PortfolioSlide />
        </section>

        <section className={`slide-section ${activeSlide === 5 ? 'active' : ''}`}>
          <ContactSlide />
        </section>
      </div>
    </>
  );
};

export default App;
