import React from 'react';

const MainContent = () => {
  return (
    <main style={{ padding: '2em' }}>
      <h1>Mi Proyecto Integrador</h1>
      <img
        src="https://via.placeholder.com/400x200.png?text=Proyecto+Integrador"
        alt="Proyecto Integrador"
        style={{ width: '100%', maxWidth: '400px' }}
      />
      <p>Este proyecto tiene como objetivo demostrar el uso de React y su ecosistema.</p>
      <ul>
        <li>Uso de componentes</li>
        <li>React Router</li>
        <li>Hooks de React</li>
        <li>Diseño modular</li>
      </ul>
    </main>
  );
};

export default MainContent;
