import React from 'react';
import proyectoImagen from '../assets/proyecto.jpg'; // Importa la imagen desde la carpeta assets

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido a mi Proyecto Integrador</h1>
      <img 
        src={proyectoImagen} // Usa la imagen importada
        alt="Proyecto Integrador" 
        style={{ maxWidth: '100%', marginBottom: '1rem' }} 
      />
      <p>
        Este es un proyecto construido con React que demuestra el uso de componentes, rutas y hooks.
      </p>
      <ul>
        <li>Componente Header con enlaces navegables</li>
        <li>Renderizado con React Router</li>
        <li>Uso de componentes funcionales</li>
      </ul>
    </div>
  );
}

export default Home;
