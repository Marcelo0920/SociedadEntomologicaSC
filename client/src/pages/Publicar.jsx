import React, { useState } from 'react';

import ReunionSection from '../components/ReunionSection'
import PostSection from '../components/PostSection'
import SecondHeader from '../components/headerComponents/SecondHeader';
import '../styles/pages/Publicaciones.css';

const Publicar = () => {

  const Publicacion = ["Publicar Post", "Publicar Reunión"];
  const [myPublicacion, setMyPublicacion] = useState("Publicar Post");
  return (
    <>
    <SecondHeader />
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
        {myPublicacion == "Publicar Post" && <PostSection/> }
        {myPublicacion == "Publicar Reunión" && <ReunionSection/> }
      </div>
    </section>
    </>
  );
};

export default Publicar;
