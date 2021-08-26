import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';

import '../styles/components/ArticuloPublicacion.css';

const ArticuloPublicacion = ({comment: {_id, text, date}}) => {

	return(
			<article className="articulos-publicacion">
			  <div>
				<p>
				  	{text}
				</p>
				<p>Comentado el <Moment format = "YYYY/MM/DD">{date}</Moment></p>
			  </div>
			</article>
		  );
};

ArticuloPublicacion.propTypes = {
	comment: PropTypes.object.isRequired,
}
  
export default connect(null, {})(ArticuloPublicacion);
