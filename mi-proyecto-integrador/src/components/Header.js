import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#ddd', padding: '1rem' }}>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Sobre el Proyecto</Link> | <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
