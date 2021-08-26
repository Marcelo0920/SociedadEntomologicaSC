import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {getPosts} from '../actions/post';
import ArticuloPublicacion from './ArticuloPublicacion';


const PublicationSection = ({getPosts, post:{posts, loading}}) => {

	useEffect(() => {
		getPosts();
	}, [getPosts])

	return( loading ? <Spinner /> : (
			<Fragment>
				{posts.map(post => (
					<ArticuloPublicacion key = {post._id} post = {post} />
				))}
			</Fragment>
		)
	)
}

PublicationSection.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	post: state.post
})

export default connect(mapStateToProps, {getPosts})(PublicationSection);