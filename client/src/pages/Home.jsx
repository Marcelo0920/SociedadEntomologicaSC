import React from 'react';
import {Link} from 'react-router-dom';
import Articulo from '../components/Articulo';
import '../styles/pages/Home.css';
import Despedida from '../static/despedida.png';

const Home = () => {
  return (
    <>
      <section className="main-section centrado ochenta">
        <div className="intro">
          <h2>Bienvenido a la Sociedad Entomológica Cruceña</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            veniam autem magni sit earum. Tempore, delectus itaque! Fugit quo
            corrupti ipsam eius. Dolorem pariatur cumque aliquam ex ipsam fuga
            laudantium!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            cumque ipsum, unde rerum saepe alias molestias similique vel.
            Excepturi quasi nobis voluptatem voluptatibus est dolorum sapiente
            ut debitis, laudantium consequuntur.
          </p>
        </div>
        <div className="make-flex">
          <Articulo 
          name = "Acerca de Nosotros"
          contexto = {`Acerca de Nosotros Acerca de Nosotros, Acerca de Nosotros
          Acerca de Nosotros Acerca de Nosotros, Acerca de Nosotros
          Acerca de Nosotros Acerca de Nosotros, Acerca de Nosotros
          Acerca de Nosotros Acerca de Nosotros, Acerca de Nosotros`} />

          <Articulo 
          name = "Publicaciones" 
          contexto = {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          cumque ipsum, unde rerum saepe alias molestias similique vel.
          Excepturi quasi nobis voluptatem voluptatibus est dolorum sapiente
          ut debitis, laudantium consequuntur.`} />
         
          <Articulo 
          name = "Próximas Reuniones" 
          contexto = {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          cumque ipsum, unde rerum saepe alias molestias similique vel.
          Excepturi quasi nobis voluptatem voluptatibus est dolorum sapiente
          ut debitis, laudantium consequuntur.`}
          />
        </div>
      </section>
      <div className="hero">
        <h2>Ver Publicaciones</h2>
        <Link to = "/publicaciones">
          <button>¡Claro!</button>
        </Link>
        
      </div>
      <div className= "despedida ochenta centrado ">
        <div className="despedida-contenido">
          <h3>Acerca de Nosotros</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            nihil. Autem nesciunt mollitia temporibus consectetur delectus
            pariatur vel vitae laudantium esse atque consequuntur quae,
            molestiae eveniet laborum odio, ipsam natus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Maxime vitae ducimus, odit
            necessitatibus, reprehenderit perspiciatis et quasi provident
            suscipit quam fuga id autem inventore quo alias ipsa iusto vel
            sapiente?
          </p>
        </div>
        <img src= {Despedida} />
      </div>
    </>
  );
};

export default Home;
