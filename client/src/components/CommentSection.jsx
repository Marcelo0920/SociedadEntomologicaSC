import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {getComments} from '../actions/comment';
import ArticuloComment from './ArticuloComment';
import { Fragment } from 'react';


const CommentSection = ({getComments, comment:{comments, loading}}) => {
    useEffect(() => {
        getComments();
    }, [getComments])

    return( loading ? <Spinner /> : (
        <Fragment>
            {comments.map(comment => (
                <ArticuloComment key = {comment._id} comment = {comment} />
            ))}
        </Fragment>
    ))
}

CommentSection.propTypes = {
    getComments: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    comment: state.comment
})

export default connect(mapStateToProps, {getComments})(CommentSection);
