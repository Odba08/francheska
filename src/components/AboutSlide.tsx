import React from 'react';
import francheskaImg from '../assets/francheska.jpg';

export const AboutSlide: React.FC = () => {
  return (
    <div className="slide-content" style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
      {/* Decorative background */}
      <div className="bg-decor-circle" style={{ width: '500px', height: '500px', bottom: '-10%', left: '20%' }}></div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '6vw', 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 40px',
        alignItems: 'center',
        zIndex: 1
      }}>
        {/* Left Side: Presentation text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '13px', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '4px', 
            color: 'var(--color-gold-dark)' 
          }}>
            SOBRE MÍ
          </span>
          
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 54px)', 
            color: 'var(--color-vinotinto)',
            lineHeight: '1.1',
            marginBottom: '10px'
          }}>
            Hola, soy <br />
            <span style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-body)', fontWeight: 800 }}>Francheska Contreras.</span>
          </h2>
          
          <div style={{ height: '3px', width: '60px', backgroundColor: 'var(--color-gold)' }}></div>
          
          <p style={{ 
            fontSize: 'clamp(15px, 1.8vw, 17px)', 
            color: 'var(--color-text-dark)', 
            fontWeight: 400,
            marginTop: '10px'
          }}>
            Ayudo a las marcas a cobrar vida en el mundo digital. No creo contenido por crearlo; diseño piezas visuales e historias pensadas para conectar genuinamente con tu comunidad y generar impacto real.
          </p>
          
          <p style={{ 
            fontSize: 'clamp(14px, 1.6vw, 16px)', 
            color: 'var(--color-text-muted)', 
            fontWeight: 300
          }}>
            Combino mi experiencia como creadora de contenido UGC (User Generated Content) y modelo comercial con la gestión estratégica de redes sociales. Traduzco la identidad de tu marca en contenido auténtico que la gente realmente quiere ver, comentar y compartir.
          </p>
        </div>

        {/* Right Side: Portrait Image Mockup */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          position: 'relative' 
        }}>
          {/* Main Photo Frame */}
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            maxWidth: '340px',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: 'var(--color-beige-dark)',
            border: '8px solid var(--color-white)',
            boxShadow: 'var(--shadow-medium)',
            position: 'relative',
            transform: 'rotate(-2deg)',
            transition: 'var(--transition-smooth)',
            cursor: 'pointer'
          }}
          className="about-photo"
          >
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${francheskaImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 65%)',
                pointerEvents: 'none'
              }}></div>
              <span style={{ 
                color: 'var(--color-white)', 
                fontFamily: 'var(--font-heading)', 
                fontSize: '18px', 
                fontWeight: 700,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                zIndex: 1
              }}>
                Francheska C.
              </span>
            </div>
          </div>
          
          {/* Aesthetic Tag badge */}
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '20px',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-text-dark)',
            padding: '8px 16px',
            borderRadius: '40px',
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: 'var(--shadow-subtle)',
            transform: 'rotate(5deg)'
          }}>
            @soyfrancrea
          </div>
        </div>
      </div>

      {/* Styled JSX for hover effects */}
      <style>{`
        .about-photo:hover {
          transform: rotate(0deg) scale(1.03) !important;
          box-shadow: var(--shadow-card) !important;
        }
        @media (max-width: 900px) {
          .slide-content {
            flex-direction: column !important;
          }
          .slide-content > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 10px !important;
          }
          .about-photo {
            max-width: 260px !important;
          }
        }
      `}</style>
    </div>
  );
};
