import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/comment';
import PropTypes from 'prop-types';

import MapLeaf from '../components/Map';

import '../styles/pages/Nosotros.css';
import '../styles/components/Map.css';

const Nosotros = ({addComment}) => {

  const [text, setText] = useState('');

  return (
    <section className="sesenta centrado">
      <div className="nosotros-section">
      
        <h3>Quiénes Somos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laudantium cupiditate aliquid, sequi eius numquam quisquam ipsum
          perspiciatis. Earum recusandae laudantium vero, aspernatur iste
          nostrum autem placeat commodi ut debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus, reiciendis quidem ab,
          dignissimos nihil corrupti laborum fuga perspiciatis atque labore,
          iure architecto ducimus voluptatibus sequi molestias distinctio
          corporis id veniam.
        </p>
      </div>
      <div className="nosotros-section">
        <h3>Historia de la SEC</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laudantium cupiditate aliquid, sequi eius numquam quisquam ipsum
          perspiciatis. Earum recusandae laudantium vero, aspernatur iste
          nostrum autem placeat commodi ut debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus, reiciendis quidem ab,
          dignissimos nihil corrupti laborum fuga perspiciatis atque labore,
          iure architecto ducimus voluptatibus sequi molestias distinctio
          corporis id veniam.
        </p>
      </div>
      <div className="nosotros-section">
        <h3>Misión y Visión</h3>
        <p>
        <strong>Misión </strong>Contribuir en la generación, difusión promoción, manejo y conocimiento de Artrópodos y en especial de la fauna entomológica del departamento de Santa Cruz y el país, organizando espacios de intercambio de la sociedad civil y el ámbito científico y académico entre especialistas nacionales e internacionales en beneficio de la sociedad boliviana.
        </p>
        <p>
        <strong>Visión </strong>La SEC, es una institución científica líder en investigaciones de artrópodos con énfasis entomológica que coadyuva en políticas de conservación de la biodiversidad, la producción agropecuaria sostenible, la salud pública y la formación de recursos humanos.
        </p>
      </div>
      <div className="nosotros-section">
        <h3>Contacto</h3>
        <MapLeaf />
        <div className="nosotros-section-contacto">
          <p>
            <strong>Número de Teléfono : </strong>3326894
          </p>
          <p>
            <strong>Correo electrónico : </strong>marcelo0920.z@gmail.com
          </p>
          <p>
            <strong>Déjanos un mensaje</strong>
          </p>
          <textarea name = "text" placeholder="El mensaje será anónimo, siéntete libre de comentarnos lo que quieras :)" onChange = {e => setText(e.target.value)} />
          <button className="button-header button-2" onClick = {e => {e.preventDefault(); addComment({text}); setText(''); }}>Enviar mensaje</button>
          
        </div>
      </div>
    </section>
  );
};

Nosotros.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment})(Nosotros);
