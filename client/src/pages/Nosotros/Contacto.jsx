import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../actions/comment';
import PropTypes from 'prop-types';
import SecondHeader from '../../components/headerComponents/SecondHeader';

import MapLeaf from '../../components/Map';

import '../../styles/pages/Nosotros.css';
import '../../styles/components/Map.css';

const Contacto = ({addComment}) => {

  const [text, setText] = useState('');

  return (
    <>
    <SecondHeader />
    <section className="sesenta centrado">
      
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
    </>
  );
};

Contacto.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment})(Contacto);
