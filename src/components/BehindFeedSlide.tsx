import React from 'react';
import lucesImg from '../assets/luces.webp';
import paralImg from '../assets/paral.jpg';
import phoneImg from '../assets/phone.jpg';
import ledImg from '../assets/led.jpg';
import microfonoImg from '../assets/microfono2.png';
import microfono2Img from '../assets/microfono.jpg';

export const BehindFeedSlide: React.FC = () => {
  const tools = [
    {
      img: lucesImg,
      title: 'PANEL NEEWER',
      rotate: '-1.5deg'
    },
    {
      img: paralImg,
      title: 'TRÍPODE',
      rotate: '2deg'
    },
    {
      img: microfonoImg,
      title: 'LARK M1 MIC',
      rotate: '-1deg'
    },
    {
      img: microfono2Img,
      title: 'MIC INALÁMBRICO',
      rotate: '1deg'
    },
    {
      img: phoneImg,
      title: 'IPHONE 14 PRO',
      rotate: '-1.5deg'
    },
    {
      img: ledImg,
      title: 'PANEL SMALLRIG',
      rotate: '2deg'
    }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
      {/* Background Decor */}
      <div className="bg-decor-circle" style={{ width: '600px', height: '600px', top: '5%', left: '5%' }}></div>

      {/* Main Canvas Card */}
      <div style={{
        width: '100%',
        maxWidth: '1050px',
        backgroundColor: 'var(--color-white)',
        borderRadius: '24px',
        padding: '35px 25px',
        boxShadow: 'var(--shadow-medium)',
        border: '1px solid rgba(107, 27, 39, 0.04)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Top Vinotinto Title Banner */}
        <div style={{
          backgroundColor: 'var(--color-vinotinto)',
          padding: '14px 50px',
          color: 'var(--color-beige)',
          borderRadius: '4px',
          textAlign: 'center',
          boxShadow: '0px 4px 15px rgba(107, 27, 39, 0.15)',
          marginBottom: '8px'
        }}>
          <h2 style={{
            color: 'var(--color-beige)',
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '3px',
            margin: 0,
            textTransform: 'uppercase'
          }}>
            Behind the Feed
          </h2>
        </div>

        {/* Subtitle - Cursive/Script Style */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: 'clamp(17px, 2.2vw, 22px)',
          color: 'var(--color-text-dark)',
          marginBottom: '35px',
          fontWeight: 400
        }}>
          Mis herramientas de trabajo
        </p>

        {/* Visual Equipment Collage */}
        <div style={{
          display: 'flex',
          gap: '18px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          minHeight: '250px'
        }}
        className="collage-container"
        >
          {tools.map((t, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '14px',
                transform: `rotate(${t.rotate})`
              }} 
              className="tool-card"
            >
              {/* Photo Frame Container */}
              <div style={{
                width: '125px',
                height: '165px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-beige-dark)',
                border: '5px solid var(--color-white)',
                boxShadow: 'var(--shadow-subtle)',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}
              className="tool-image-frame"
              >
                <img 
                  src={t.img} 
                  alt={t.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'var(--transition-quick)'
                  }} 
                  className="tool-photo"
                />
              </div>

              {/* Marker highlighted label */}
              <span style={{ 
                backgroundColor: '#FFF59D', 
                color: 'var(--color-text-dark)', 
                fontWeight: 700, 
                padding: '4px 10px', 
                borderRadius: '2px', 
                fontSize: '10.5px',
                letterSpacing: '1px',
                fontFamily: 'var(--font-heading)',
                boxShadow: '2px 2px 0px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap'
              }}>
                {t.title}
              </span>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '12px',
          marginTop: '35px',
          fontWeight: 400,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
          📸 Grabación 4K Cine &bull; Iluminación Alta Potencia &bull; Audio Lark Inalámbrico
        </p>
      </div>

      <style>{`
        .collage-container {
          perspective: 1000px;
        }
        .tool-card {
          transition: var(--transition-smooth) !important;
        }
        .tool-card:hover {
          transform: scale(1.08) translateY(-10px) rotate(0deg) !important;
          z-index: 10;
        }
        .tool-card:hover .tool-image-frame {
          box-shadow: var(--shadow-medium) !important;
          border-color: var(--color-gold) !important;
        }
        .tool-card:hover .tool-photo {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .slide-content {
            padding: 40px 16px !important;
          }
          .collage-container {
            gap: 16px !important;
          }
          .tool-image-frame {
            width: 100px !important;
            height: 135px !important;
          }
        }
      `}</style>
    </div>
  );
};
