import React from 'react';
import francheska2Img from '../assets/francheska2.jpg';

export const ServicesSlide: React.FC = () => {
  const servicesList = [
    { num: '1', title: 'Creación de contenido (Reels / TikTok)' },
    { num: '2', title: 'Desarrollo de ideas y guiones' },
    { num: '3', title: 'Estrategia de contenido' },
    { num: '4', title: 'Gestión de redes sociales' },
    { num: '5', title: 'Diseño de piezas en Canva' },
    { num: '6', title: 'Optimización de perfiles' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
      {/* Background Decor */}
      <div className="bg-decor-circle" style={{ width: '550px', height: '550px', top: '-10%', right: '-10%' }}></div>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: '6vw',
        alignItems: 'center'
      }}>
        {/* Left Side: Photo of Francheska in Burgundy (Vinotinto) outfit */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
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
            transform: 'rotate(2deg)',
            transition: 'var(--transition-smooth)',
            cursor: 'pointer'
          }}
          className="services-photo"
          >
            {/* Show the vinotinto outfit photo */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${francheska2Img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px',
              backgroundBlendMode: 'multiply'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(107, 27, 39, 0.4) 0%, rgba(0,0,0,0) 60%)',
                pointerEvents: 'none'
              }}></div>
              <span style={{ 
                color: 'var(--color-white)', 
                fontFamily: 'var(--font-heading)', 
                fontSize: '20px', 
                fontWeight: 700,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                zIndex: 1
              }}>
                Instagram CM Strategy
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Elegant Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '4px', 
              color: 'var(--color-gold-dark)' 
            }}>
              PORTAFOLIO DE SERVICIOS
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--color-vinotinto)', margin: 0 }}>
              ¿Qué puedo hacer por tu marca?
            </h2>
          </div>

          {/* List items with borders */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {servicesList.map((item, index) => (
              <div 
                key={index} 
                className="service-list-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '16px 10px',
                  borderBottom: '1px solid rgba(107, 27, 39, 0.12)',
                  transition: 'var(--transition-quick)',
                  cursor: 'pointer'
                }}
              >
                {/* Stylized number in Playfair font */}
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'var(--color-gold-dark)',
                  fontStyle: 'italic',
                  width: '30px'
                }}>
                  {item.num}
                </span>
                
                {/* Title */}
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(15px, 2vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--color-text-dark)',
                  transition: 'var(--transition-quick)'
                }}
                className="service-title"
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-photo:hover {
          transform: rotate(0deg) scale(1.03) !important;
          box-shadow: var(--shadow-card) !important;
        }
        .service-list-item:hover {
          padding-left: 20px !important;
          background-color: rgba(107, 27, 39, 0.02);
        }
        .service-list-item:hover .service-title {
          color: var(--color-vinotinto) !important;
          font-weight: 600 !important;
        }
        @media (max-width: 900px) {
          .slide-content {
            justify-content: flex-start !important;
            padding-top: 10vh !important;
          }
          .slide-content > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 10px !important;
          }
          .services-photo {
            max-width: 260px !important;
          }
          .service-list-item {
            padding: 12px 6px !important;
          }
        }
      `}</style>
    </div>
  );
};
