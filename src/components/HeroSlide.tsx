import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface HeroSlideProps {
  onNext: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onNext }) => {
  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', height: '100%' }}>
      {/* Decorative Circles */}
      <div className="bg-decor-circle" style={{ width: '600px', height: '600px', top: '-10%', left: '-10%' }}></div>
      <div className="bg-decor-circle" style={{ width: '400px', height: '400px', bottom: '5%', right: '-5%' }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}>
        {/* Brand/Subtitle */}
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '14px', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          letterSpacing: '5px', 
          color: 'var(--color-gold-dark)', 
          marginBottom: '20px' 
        }}>
          PORTFOLIO 2026
        </span>

        {/* Logo Text */}
        <h1 style={{ 
          fontSize: 'clamp(70px, 12vw, 150px)', 
          letterSpacing: '-2px', 
          lineHeight: '0.9',
          color: 'var(--color-vinotinto)',
          margin: '0 0 20px 0',
          fontWeight: 800
        }}>
          FCREA
        </h1>

        {/* Role Subtitle */}
        <h2 style={{ 
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(18px, 3vw, 24px)', 
          fontWeight: 400, 
          letterSpacing: '1px', 
          color: 'var(--color-text-dark)', 
          margin: '0 0 35px 0'
        }}>
          Content Creator <span style={{ color: 'var(--color-gold)' }}>|</span> Community Manager
        </h2>

        {/* Brief Intro */}
        <p style={{ 
          fontSize: 'clamp(15px, 2vw, 18px)', 
          color: 'var(--color-text-muted)', 
          maxWidth: '550px', 
          marginBottom: '45px',
          fontWeight: 300
        }}>
          No creo contenido por crearlo; diseño piezas visuales e historias pensadas para conectar genuinamente con tu comunidad y generar impacto real.
        </p>

        {/* CTA Button */}
        <button className="btn-primary" onClick={onNext}>
          Explorar Portafolio <FiArrowRight size={18} />
        </button>
      </div>

      {/* Floating coordinates indicator (esthetic) */}
      <div style={{ 
        position: 'absolute', 
        bottom: '80px', 
        fontFamily: 'var(--font-body)', 
        fontSize: '11px', 
        letterSpacing: '2px', 
        color: 'var(--color-text-muted)', 
        textTransform: 'uppercase',
        opacity: 0.5 
      }}>
        Deslizar para comenzar ➔
      </div>
    </div>
  );
};
