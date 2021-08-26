import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from './Spinner';
import {getReunions} from '../actions/reunion';

import ArticuloReunion from './ArticuloReunion';



const Reuniones = ({getReunions, reunion:{reunions, loading}}) => {

	useEffect(() => {
		getReunions();
	}, [getReunions])

	return( loading ? <Spinner /> : (
			<Fragment>
				{reunions.map(reunion => (
					<ArticuloReunion key = {reunion._id} reunion = {reunion} />
				))}
			</Fragment>
		)
	)
}

Reuniones.propTypes = {
	getReunions: PropTypes.func.isRequired,
	reunion: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	reunion: state.reunion
})

export default connect(mapStateToProps, {getReunions})(Reuniones);