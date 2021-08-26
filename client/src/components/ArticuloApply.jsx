import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';

import '../styles/components/ArticuloPublicacion.css';

const ArticuloApply = ({apply: {_id, text, date, name, email, college, career}}) => {

	return(
			<article className="articulos-publicacion">
			    <div>
                    <p>
                        Nombre: {name}
                    </p>
                    <p>
                        Email: {email}
                    </p>
                </div>
                <div>
                    <p>
                        Universidad/Colegio: {college}
                    </p>
                    <p>
                        Carrera Universitaria: {career}
                    </p>
                </div>
                <div>
                    <p>
                        Razón: {text}
                    </p>
                </div>
				<p>Comentado el <Moment format = "YYYY/MM/DD">{date}</Moment></p>
			</article>
		  );
};

ArticuloApply.propTypes = {
	apply: PropTypes.object.isRequired,
}
  
export default connect(null, {})(ArticuloApply);
