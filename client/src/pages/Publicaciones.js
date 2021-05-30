import React, { useState } from 'react';

import PublicationSection from '../components/PublicationSection';
import GaleriaSection from '../components/GaleriaSection';
import Reuniones from '../components/Reuniones';
import '../styles/pages/Publicaciones.css';

const Publicaciones = () => {

  const Publicacion = ["Publicaciones", "Reuniones", "Galería"];
  const [myPublicacion, setMyPublicacion] = useState("Publicaciones");
  return (
    <section className="ochenta centrado">
      <div className="navegacion-publicaciones">
        {
          Publicacion.map(Navegacion =>(
            <button
              type = "button"
              key = {Navegacion}
              className = {""}
              onClick = {() => setMyPublicacion(Navegacion)}  
            >
              {Navegacion}
            </button>
          ))}
      </div>
      <div className="articulos">
        {myPublicacion == "Publicaciones" && <PublicationSection/> }
        {myPublicacion == "Reuniones" && <Reuniones/> }
        {myPublicacion == "Galería" && <GaleriaSection/> }
      </div>
    </section>
  );
};

export default Publicaciones;
