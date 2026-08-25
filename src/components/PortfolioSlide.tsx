import React, { useState } from 'react';
import { FiInstagram, FiExternalLink, FiPlay, FiX, FiEye } from 'react-icons/fi';

interface Reel {
  url: string;
  title: string;
  previewColor: string;
  emoji: string;
  views?: string;
  isEmbeddable?: boolean;
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
          emoji: '🍔🔥',
          views: 'UGC Reel',
          isEmbeddable: true
        },
        {
          url: 'https://www.instagram.com/reel/DbT-QFShc31/',
          title: 'Reel La Vaquita #2',
          previewColor: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
          emoji: '🍺🍟',
          views: 'UGC Reel',
          isEmbeddable: true
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
          emoji: '🍔🤤',
          views: 'UGC Reel',
          isEmbeddable: true
        },
        {
          url: 'https://www.instagram.com/reel/DatS80HpdOd/',
          title: 'Reel Savro #2',
          previewColor: 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)',
          emoji: '🥓🧀',
          views: 'UGC Reel',
          isEmbeddable: true
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
          emoji: '👠👗',
          views: 'Fashion UGC',
          isEmbeddable: true
        },
        {
          url: 'https://www.instagram.com/reel/DboADiOzvcn/',
          title: 'Reel Bellissimas #2',
          previewColor: 'linear-gradient(135deg, #FBC2EB 0%, #A6C1EE 100%)',
          emoji: '🛍️✨',
          views: 'Fashion UGC',
          isEmbeddable: true
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
          emoji: '💅💇‍♀️',
          views: 'Feed Estético',
          isEmbeddable: false
        },
        {
          url: 'https://www.instagram.com/hillarysotostudio/',
          title: 'Estrategia de Estética',
          previewColor: 'linear-gradient(135deg, #FDFCFB 0%, #E2D9D5 100%)',
          emoji: '💆‍♀️✨',
          views: 'Estrategia CM',
          isEmbeddable: false
        }
      ]
    }
  ];

  const [activeBrand, setActiveBrand] = useState<Brand>(brands[0]);
  const [activeModalReel, setActiveModalReel] = useState<{ reel: Reel; brandName: string } | null>(null);

  const getEmbedUrl = (url: string) => {
    // If it's a reel or post url, add /embed/
    if (url.includes('/reel/') || url.includes('/p/')) {
      const cleanUrl = url.split('?')[0].replace(/\/$/, '');
      return `${cleanUrl}/embed/`;
    }
    return null;
  };

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
            padding: '36px',
            boxShadow: 'var(--shadow-medium)',
            border: '1px solid rgba(107, 27, 39, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '25px'
          }}>
            {/* Header info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '24px', color: 'var(--color-vinotinto)' }}>{activeBrand.name}</h3>
                
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
                    fontWeight: 600,
                    fontSize: '13px',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    backgroundColor: 'var(--color-beige)',
                    transition: 'var(--transition-quick)'
                  }}
                  className="insta-link"
                >
                  <FiInstagram size={15} /> {activeBrand.handle} <FiExternalLink size={12} />
                </a>
              </div>
              
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', lineHeight: '1.6', fontWeight: 300 }}>
                {activeBrand.desc}
              </p>
            </div>

            {/* Reels Video Cards */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: 'var(--color-text-dark)',
                  margin: 0
                }}>
                  Contenido Destacado
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  Haz clic para ver el video interactivo
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {activeBrand.reels.map((reel, rIdx) => {
                  const embedUrl = getEmbedUrl(reel.url);
                  return (
                    <div
                      key={rIdx}
                      style={{
                        flex: '1',
                        minWidth: '150px',
                        maxWidth: '220px',
                        aspectRatio: '9/15',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        background: reel.previewColor,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px',
                        color: 'var(--color-white)',
                        position: 'relative',
                        boxShadow: 'var(--shadow-medium)',
                        transition: 'var(--transition-smooth)',
                        border: '4px solid #fff',
                        cursor: 'pointer'
                      }}
                      className="reel-card"
                      onClick={() => {
                        if (embedUrl) {
                          setActiveModalReel({ reel, brandName: activeBrand.name });
                        } else {
                          window.open(reel.url, '_blank');
                        }
                      }}
                    >
                      {/* Top part: Brand emoji & badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                        <span style={{ fontSize: '22px' }}>{reel.emoji}</span>
                        <span style={{ 
                          fontSize: '9.5px', 
                          fontWeight: 700, 
                          backgroundColor: 'rgba(0,0,0,0.3)', 
                          padding: '3px 8px', 
                          borderRadius: '12px',
                          backdropFilter: 'blur(4px)',
                          letterSpacing: '0.5px'
                        }}>
                          {reel.views}
                        </span>
                      </div>

                      {/* Middle part: Play Button Icon Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(255, 255, 255, 0.6)',
                        transition: 'var(--transition-quick)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                      }}
                      className="reel-play-btn"
                      >
                        <FiPlay size={20} fill="#fff" color="#fff" style={{ marginLeft: '3px' }} />
                      </div>

                      {/* Bottom part: Title and Insta hint */}
                      <div style={{ zIndex: 2 }}>
                        <p style={{ color: '#fff', fontSize: '12.5px', fontWeight: 700, textShadow: '0 2px 6px rgba(0,0,0,0.4)', marginBottom: '4px' }}>
                          {reel.title}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', opacity: 0.95, textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                          <FiEye size={12} /> Ver Video
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Instagram Embed Modal Player */}
      {activeModalReel && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(20, 16, 15, 0.82)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalReel(null)}
        >
          <div 
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '440px',
              maxHeight: '90vh',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: 'var(--color-vinotinto)',
              color: 'var(--color-beige)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-beige)', fontFamily: 'var(--font-heading)' }}>
                  {activeModalReel.brandName}
                </h4>
                <span style={{ fontSize: '11px', opacity: 0.8 }}>
                  {activeModalReel.reel.title}
                </span>
              </div>
              <button 
                onClick={() => setActiveModalReel(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-beige)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
                aria-label="Cerrar modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Embedded Instagram Reel Iframe */}
            <div style={{
              width: '100%',
              height: '480px',
              backgroundColor: '#FAFAFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {getEmbedUrl(activeModalReel.reel.url) ? (
                <iframe
                  src={getEmbedUrl(activeModalReel.reel.url)!}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  style={{ border: 'none', overflow: 'hidden' }}
                  title={activeModalReel.reel.title}
                />
              ) : (
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
                  No se pudo cargar el reproductor embed.
                </p>
              )}
            </div>

            {/* Modal Footer Link */}
            <div style={{
              padding: '14px 20px',
              borderTop: '1px solid rgba(107, 27, 39, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-beige)'
            }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                ¿Prefieres verlo en la app?
              </span>
              <a
                href={activeModalReel.reel.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  backgroundColor: 'var(--color-vinotinto)',
                  color: 'var(--color-beige)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <FiInstagram size={14} /> Abrir en Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .brand-tab:hover {
          transform: translateX(5px) !important;
        }
        .reel-card:hover {
          transform: scale(1.04) translateY(-6px) !important;
          box-shadow: 0 16px 32px rgba(107, 27, 39, 0.18) !important;
        }
        .reel-card:hover .reel-play-btn {
          background-color: var(--color-vinotinto) !important;
          border-color: var(--color-vinotinto) !important;
          transform: translate(-50%, -50%) scale(1.15) !important;
        }
        .insta-link:hover {
          background-color: var(--color-vinotinto) !important;
          color: var(--color-beige) !important;
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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
            max-width: 150px !important;
          }
        }
      `}</style>
    </div>
  );
};
