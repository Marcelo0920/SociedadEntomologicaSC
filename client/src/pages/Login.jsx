import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';

import '../styles/pages/Login.css';


const Login = ({login}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData; 

    const onChange = e =>
        setFormData({...formData, [e.target.name] : e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
        login(email, password);
    }

    return(
        <section className = "login">
            <div className = "form-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit = {e => onSubmit(e)}>
                <div className = "control">
                    <label for = "email">Email</label>
                    <input type = "email" name = "email" value = "email" onChange = {e => onChange(e)} />
                </div>
                <div className = "control">
                    <label for = "password">Password</label>
                    <input type = "password" name = "password" value = "password" onChange = {e => onChange(e)}/>
                </div>
                <div className = "control">
                    <input type = "submit" value = "Login" />
                </div>
            </form>
            <div className = "link">
                <Link to = "/register">¡Aplica para formar parte de la Sociedad!</Link>
            </div>
        </div>
        </section>
        
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}


export default connect(null, {login})(Login);