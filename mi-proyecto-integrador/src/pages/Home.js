import React from 'react';
import proyectoImagen from '../assets/proyecto.png'; // Importa la imagen desde la carpeta assets

function Home() {
  return (
    <div className="container">
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido a Cógela suave</h1>
      <img 
        src={proyectoImagen} // Usa la imagen importada
        alt="Proyecto Integrador" 
        style={{ maxWidth: '100%', marginBottom: '1rem' }} 
      />
      <p>
      ¿Cómo se puede ayudar a los estudiantes de la Universidad San Buenaventura de Bogotá, para el monitoreo y seguimiento de sus emociones?
      </p>
      <ul>
        <li>Somos un grupo de estudiantes comprometidos con la salud mental de nuestros compañeros universitarios. Queremos incentivar y promover la atención y cuidado de su bienestar para asegurarnos de que tengan acceso a los recursos necesarios para enfrentar los desafíos académicos y personales. Juntos, podemos construir una comunidad universitaria más saludable y feliz.</li>
        <li>Cógela suave</li>
      </ul>
    </div>
    </div>
  );
}

export default Home;
