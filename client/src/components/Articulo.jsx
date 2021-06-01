import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/components/Articulo.css';
import Articulo2 from '../static/article_2.png';

const Articulo = (props) => {

    let zelda;
    if(props.name === 'Acerca de Nosotros'){
      zelda = "/nosotros"
    }
    if(props.name === 'Publicaciones'){
      zelda = "/publicaciones"
    }
    if(props.name === 'Próximas Reuniones'){
      zelda = "/publicaciones"
    }

  return (
    <article className="article-item">
      <img src={Articulo2} alt="foto articulo" />
      
      <Link to = {zelda}>
        <h4>{props.name}</h4>
      </Link>
      <p>
        {props.contexto}
      </p>
    </article>
  );
};

export default Articulo;
