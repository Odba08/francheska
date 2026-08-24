import React from 'react';

interface NavbarProps {
  activeSlide: number;
  onNavigate: (index: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSlide, onNavigate }) => {
  const menuItems = [
    { label: 'Inicio', index: 0 },
    { label: 'Sobre Mí', index: 1 },
    { label: 'Servicios', index: 2 },
    { label: 'Herramientas', index: 3 },
    { label: 'Proyectos', index: 4 },
    { label: 'Contacto', index: 5 }
  ];

  return (
    <nav className="main-nav">
      {/* Brand logo */}
      <div className="nav-logo" onClick={() => onNavigate(0)}>
        <span>F</span>
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: 400, 
          fontSize: '14px', 
          letterSpacing: '2px', 
          color: 'var(--color-gold-dark)', 
          marginLeft: '4px',
          borderLeft: '1px solid rgba(107, 27, 39, 0.2)',
          paddingLeft: '6px'
        }}>
          CREA
        </span>
      </div>

      {/* Navigation menu */}
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.index}>
            <span
              onClick={() => onNavigate(item.index)}
              className={`nav-link ${activeSlide === item.index ? 'active' : ''}`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
