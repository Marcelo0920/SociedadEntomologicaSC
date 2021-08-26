import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {getApplies} from '../actions/apply';

import ArticuloApply from '../components/ArticuloApply';


const ApplySection = ({getApplies, apply: {applies, loading}}) => {

    useEffect(() => {
        getApplies();
    }, [getApplies])

    return( loading? <Spinner /> :(
        <Fragment>
            {applies.map(apply => (
                <ArticuloApply key = {apply._id} apply = {apply} />
            ))}
        </Fragment>
    ))
}

ApplySection.propTypes = {
    getApplies: PropTypes.func.isRequired,
    apply: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    apply: state.apply
})

export default connect(mapStateToProps, {getApplies})(ApplySection);