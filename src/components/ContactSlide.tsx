import React, { useState } from 'react';
import { FiInstagram, FiMessageSquare, FiSend } from 'react-icons/fi';

export const ContactSlide: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setEmail('');
      setMessage('');
    }, 3000);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola Francheska! Vi tu portafolio FCREA y me gustaría recibir información sobre tus servicios de Gestión de Instagram y Creación de Contenido.'
  );

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
      {/* Background Decor */}
      <div className="bg-decor-circle" style={{ width: '600px', height: '600px', bottom: '-20%', left: '-10%' }}></div>
      <div className="bg-decor-circle" style={{ width: '400px', height: '400px', top: '-10%', right: '-10%' }}></div>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '8vw',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Column: Social Links & Prompt */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '4px', 
              color: 'var(--color-gold-dark)' 
            }}>
              CONTACTO
            </span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 50px)', color: 'var(--color-vinotinto)', lineHeight: '1.1' }}>
              ¡Tu marca necesita personalidad!
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', fontWeight: 300, lineHeight: '1.6' }}>
              Trabajemos juntos para llevar tu presencia digital al siguiente nivel. Escríbeme directamente o envíame un mensaje por aquí.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
              {/* WhatsApp direct link */}
              <a 
                href={`https://wa.me/584246130436?text=${whatsappMessage}`}
                target="_blank" 
                rel="noreferrer"
                className="contact-channel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '16px 20px',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'var(--color-text-dark)',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid rgba(107, 27, 39, 0.04)',
                  transition: 'var(--transition-quick)'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#E8F5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E7D32'
                }}>
                  <FiMessageSquare size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Escríbeme por WhatsApp</span>
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>0424-6130436</span>
                </div>
              </a>

              {/* Instagram link */}
              <a 
                href="https://instagram.com/soyfrancrea" 
                target="_blank" 
                rel="noreferrer"
                className="contact-channel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '16px 20px',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'var(--color-text-dark)',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid rgba(107, 27, 39, 0.04)',
                  transition: 'var(--transition-quick)'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#FDF2F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#BE185D'
                }}>
                  <FiInstagram size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sígueme en Instagram</span>
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>@soyfrancrea</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Message Form */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--shadow-medium)',
            border: '1px solid rgba(107, 27, 39, 0.04)'
          }}>
            <h3 style={{ fontSize: '22px', color: 'var(--color-vinotinto)', marginBottom: '20px' }}>Envíame un correo</h3>
            
            {formSent ? (
              <div style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: 'var(--color-vinotinto)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '36px' }}>✨</span>
                <h4 style={{ fontSize: '18px', color: 'var(--color-text-dark)' }}>¡Mensaje Enviado!</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Me pondré en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tu Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: '14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(107,27,39,0.1)',
                      backgroundColor: 'var(--color-beige)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-text-dark)',
                      transition: 'var(--transition-quick)'
                    }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntame sobre tu marca..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      padding: '14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(107,27,39,0.1)',
                      backgroundColor: 'var(--color-beige)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-text-dark)',
                      resize: 'none',
                      transition: 'var(--transition-quick)'
                    }}
                    className="form-input"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '10px' }}>
                  Enviar Mensaje <FiSend size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          marginTop: '60px', 
          borderTop: '1px solid rgba(44, 37, 35, 0.08)', 
          paddingTop: '20px', 
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--color-text-muted)'
        }}>
          &copy; {new Date().getFullYear()} FCREA. Todos los derechos reservados. Diseñado para Francheska Contreras.
        </div>
      </div>

      <style>{`
        .contact-channel:hover {
          transform: translateY(-3px) !important;
          border-color: rgba(107, 27, 39, 0.12) !important;
          box-shadow: var(--shadow-medium) !important;
        }
        .form-input:focus {
          border-color: var(--color-vinotinto) !important;
          background-color: var(--color-white) !important;
          box-shadow: var(--shadow-subtle);
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
        }
      `}</style>
    </div>
  );
};
