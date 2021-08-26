import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addApply} from '../actions/apply';

import '../styles/pages/Register.css'


const Register = ({addApply}) =>  {

    const [formData, setFormData] = useState({
        text: '',
        email: '',
        name: '',
        college: '',
        career: ''
    })

    const {text, email, name, college, career} = formData;

    const onSubmit = async e => {
        e.preventDefault();
        addApply({text, email, name, college, major});
    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})


    return(
        <section className = "login">
            <div className = "form-container">
                <h1>Formulario de Registro</h1>
                <form onSubmit = {e => onSubmit(e)} >
                    <div className = "flex-right">
                        <div className = "control">
                            <label>Nombre Completo</label>
                            <input 
                                type = "text"
                                value = {name}
                                name = "name"
                                onChange = {e => onChange(e)}
                            />
                        </div>
                        <div className = "control">
                            <label>Email</label>
                            <input 
                                type = "text"
                                value = {email}
                                name = "email"
                                onChange = {e => onChange(e)}
                            />
                        </div>
                    </div>
                    <div className = "flex-right">
                        <div className = "control">
                            <label>Universidad o Colegio</label>
                            <input 
                                type = "text"
                                value = {college}
                                name = "college"
                                onChange = {e => onChange(e)}
                            />
                        </div>
                        <div className = "control">
                            <label>Carrera Universitaria</label>
                            <input 
                                type = "text"
                                value = {career}
                                name = "career"
                                onChange = {e => onChange(e)}
                            />
                        </div>
                    </div>
                    <div className = "control">
                        <label>Escriba el por qué está interesado formar parte de la SEC</label>
                        <textarea 
                            placeholder="Deja tu mensaje aquí :)" 
                            defaultValue={''} 
                            value = {text}
                            name = "text"
                            onChange = {e => onChange(e)}
                        />
                    </div>
                    <div className = "control">
                    <input type = "submit" value = "Aplicar" />
                    </div>
                </form>
            </div>
        </section>
    )
}

Register.propTypes = {
    addApply: PropTypes.func.isRequired
}

export default connect(null, {addApply})(Register);