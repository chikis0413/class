import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#ccc', padding: '1em' }}>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/about">Acerca de</Link> |{' '}
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
