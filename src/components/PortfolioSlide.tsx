import React, { useState } from 'react';
import { FiInstagram, FiExternalLink, FiPlay } from 'react-icons/fi';

interface Reel {
  url: string;
  title: string;
  previewColor: string;
  emoji: string;
}

interface Brand {
  id: string;
  name: string;
  handle: string;
  category: string;
  desc: string;
  link: string;
  reels: Reel[];
}

export const PortfolioSlide: React.FC = () => {
  const brands: Brand[] = [
    {
      id: 'vaquita',
      name: 'La Vaquita Fast Food',
      handle: '@lavaquita_foodandbeer',
      category: 'UGC Content & Model',
      desc: 'Creación de contenido UGC dinámico para redes sociales y modelo comercial. Enfoque en antojar a la audiencia mediante reels interactivos de comida rápida, transmitiendo el ambiente, energía y diversión de la marca.',
      link: 'https://www.instagram.com/lavaquita_foodandbeer/',
      reels: [
        {
          url: 'https://www.instagram.com/reel/DbyrxUyBLcN/',
          title: 'Reel La Vaquita #1',
          previewColor: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
          emoji: '🍔🔥'
        },
        {
          url: 'https://www.instagram.com/reel/DbT-QFShc31/',
          title: 'Reel La Vaquita #2',
          previewColor: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
          emoji: '🍺🍟'
        }
      ]
    },
    {
      id: 'savro',
      name: 'Savro Burger',
      handle: '@Savroburger',
      category: 'UGC & Food Styling',
      desc: 'Producción audiovisual de reels gastronómicos de alto impacto. Curación de contenido para resaltar la jugosidad de las hamburguesas, ingredientes premium y la experiencia Savro en cada bocado.',
      link: 'https://www.instagram.com/Savroburger/',
      reels: [
        {
          url: 'https://www.instagram.com/reel/Db1fLcGJy17/',
          title: 'Reel Savro #1',
          previewColor: 'linear-gradient(135deg, #FEE140 0%, #FA709A 100%)',
          emoji: '🍔🤤'
        },
        {
          url: 'https://www.instagram.com/reel/DatS80HpdOd/',
          title: 'Reel Savro #2',
          previewColor: 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)',
          emoji: '🥓🧀'
        }
      ]
    },
    {
      id: 'bellissima',
      name: 'Bellissimas Vzla',
      handle: '@Bellissima.vzla',
      category: 'Model & Fashion UGC',
      desc: 'Modelaje comercial y creación de contenido dinámico para marca de moda y calzado femenino. Creación de reels estilo "Get Ready With Me", transiciones creativas y reseñas honestas de calzado.',
      link: 'https://www.instagram.com/bellissima.vzla/',
      reels: [
        {
          url: 'https://www.instagram.com/reel/Db5-VB0TFS3/',
          title: 'Reel Bellissimas #1',
          previewColor: 'linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)',
          emoji: '👠👗'
        },
        {
          url: 'https://www.instagram.com/reel/DboADiOzvcn/',
          title: 'Reel Bellissimas #2',
          previewColor: 'linear-gradient(135deg, #FBC2EB 0%, #A6C1EE 100%)',
          emoji: '🛍️✨'
        }
      ]
    },
    {
      id: 'hillary',
      name: 'Hillary Soto Studio',
      handle: '@hillarysotostudio',
      category: 'Community Manager & Brand Grid',
      desc: 'Community Management integral y diseño de feed estético para salón de belleza. Planificación de contenido enfocado en resultados estéticos de alta calidad, tratamientos, tips de cuidado y testimoniales de clientes.',
      link: 'https://www.instagram.com/hillarysotostudio/',
      reels: [
        {
          url: 'https://www.instagram.com/hillarysotostudio/',
          title: 'Nails & Beauty Grid',
          previewColor: 'linear-gradient(135deg, #E2D9D5 0%, #C9B2A6 100%)',
          emoji: '💅💇‍♀️'
        },
        {
          url: 'https://www.instagram.com/hillarysotostudio/',
          title: 'Estrategia de Estética',
          previewColor: 'linear-gradient(135deg, #FDFCFB 0%, #E2D9D5 100%)',
          emoji: '💆‍♀️✨'
        }
      ]
    }
  ];

  const [activeBrand, setActiveBrand] = useState<Brand>(brands[0]);

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
      {/* Background Decor */}
      <div className="bg-decor-circle" style={{ width: '500px', height: '500px', bottom: '-15%', right: '5%' }}></div>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        zIndex: 1
      }}>
        {/* Title */}
        <div style={{ marginBottom: '35px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '13px', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '4px', 
            color: 'var(--color-gold-dark)' 
          }}>
            PROYECTOS
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--color-vinotinto)' }}>
            Marcas que confían en mí
          </h2>
        </div>

        <div className="portfolio-grid" style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '50px',
          width: '100%'
        }}>
          {/* Left Column: Brand Selector List */}
          <div className="brand-tab-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {brands.map((b) => (
              <div
                key={b.id}
                onClick={() => setActiveBrand(b)}
                style={{
                  padding: '18px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  backgroundColor: activeBrand.id === b.id ? 'var(--color-vinotinto)' : 'var(--color-white)',
                  color: activeBrand.id === b.id ? 'var(--color-beige)' : 'var(--color-text-dark)',
                  border: '1px solid rgba(107, 27, 39, 0.04)',
                  boxShadow: activeBrand.id === b.id ? 'var(--shadow-medium)' : 'var(--shadow-subtle)',
                  transition: 'var(--transition-quick)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
                className="brand-tab"
              >
                <span style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 700, 
                  fontSize: '17px',
                  color: activeBrand.id === b.id ? 'var(--color-white)' : 'var(--color-vinotinto)'
                }}>
                  {b.name}
                </span>
                <span style={{ 
                  fontSize: '11px', 
                  opacity: 0.8,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: activeBrand.id === b.id ? 'var(--color-gold)' : 'var(--color-text-muted)'
                }}>
                  {b.category}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Brand detail and Reels previews */}
          <div style={{ 
            backgroundColor: 'var(--color-white)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--shadow-medium)',
            border: '1px solid rgba(107, 27, 39, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            {/* Header info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '26px', color: 'var(--color-vinotinto)' }}>{activeBrand.name}</h3>
                
                <a 
                  href={activeBrand.link} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold-dark)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '14px'
                  }}
                  className="insta-link"
                >
                  <FiInstagram size={16} /> {activeBrand.handle} <FiExternalLink size={12} />
                </a>
              </div>
              
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6', fontWeight: 300 }}>
                {activeBrand.desc}
              </p>
            </div>

            {/* Reels Video Cards */}
            <div>
              <h4 style={{ 
                fontSize: '13px', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                color: 'var(--color-text-dark)',
                marginBottom: '20px'
              }}>
                Contenido Destacado
              </h4>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                {activeBrand.reels.map((reel, rIdx) => (
                  <a
                    key={rIdx}
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: '1',
                      maxWidth: '200px',
                      aspectRatio: '9/16',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: reel.previewColor,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '15px',
                      color: 'var(--color-white)',
                      textDecoration: 'none',
                      position: 'relative',
                      boxShadow: 'var(--shadow-subtle)',
                      transition: 'var(--transition-smooth)',
                      border: '4px solid #fff'
                    }}
                    className="reel-card"
                  >
                    {/* Top part: Brand emoji */}
                    <span style={{ fontSize: '24px' }}>{reel.emoji}</span>

                    {/* Middle part: Play Button Icon Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      transition: 'var(--transition-quick)'
                    }}
                    className="reel-play-btn"
                    >
                      <FiPlay size={18} fill="#fff" color="#fff" />
                    </div>

                    {/* Bottom part: Title and Insta hint */}
                    <div style={{ zIndex: 2 }}>
                      <p style={{ color: '#fff', fontSize: '12px', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                        {reel.title}
                      </p>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                        Ver en Instagram
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brand-tab:hover {
          transform: translateX(5px) !important;
        }
        .reel-card:hover {
          transform: scale(1.04) translateY(-5px) !important;
          box-shadow: var(--shadow-medium) !important;
        }
        .reel-card:hover .reel-play-btn {
          background-color: var(--color-vinotinto) !important;
          border-color: var(--color-vinotinto) !important;
          transform: translate(-50%, -50%) scale(1.1) !important;
        }
        .insta-link:hover {
          color: var(--color-vinotinto) !important;
        }
        @media (max-width: 900px) {
          .slide-content {
            justify-content: flex-start !important;
            padding-top: 90px !important;
          }
          .slide-content > div {
            padding: 0 16px !important;
          }
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .brand-tab {
            padding: 12px 18px !important;
          }
          .reel-card {
            max-width: 140px !important;
          }
        }
      `}</style>
    </div>
  );
};
