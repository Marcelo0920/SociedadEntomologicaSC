import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';

import '../styles/components/ArticuloPublicacion.css';

const ArticuloPublicacion = ({auth, post: {_id, text, name, title, date, postImg}}) => {

	return(
			<article className="articulos-publicacion">
			  <div>
				<h5>
					<strong>{title}</strong>
				</h5>
				<p>
				  	{text}
				</p>
				<p>Publicado por {name} el <Moment format = "YYYY/MM/DD">{date}</Moment></p>
			  </div>
			  <img src={(`http://localhost:5000/uploads/${postImg}`)} alt="foto articulo" />
			</article>
		  );
};

ArticuloPublicacion.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})
  
export default connect(mapStateToProps, {})(ArticuloPublicacion);
