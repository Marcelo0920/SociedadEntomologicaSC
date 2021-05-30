import React from 'react';

import '../styles/components/Articulo.css';
import Articulo2 from '../static/article_2.png';

const Articulo = (props) => {
  return (
    <article className="article-item">
      <img src={Articulo2} alt="foto articulo" />
      <h4>{props.name}</h4>
      <p>
        {props.contexto}
      </p>
    </article>
  );
};

export default Articulo;
