import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addReunion} from '../actions/reunion';

import '../styles/components/PublicarSection.css'


const ReunionSection = ({addReunion}) => {

	const [formData, setFormData] = useState({
        text: '',
        title: ''
    });

    const  {title, text} = formData;
    
    const onSubmit = e => {
        e.preventDefault();
        addReunion({title, text});   
    }

    const onChange = e => 
    setFormData({...formData, [e.target.name]: e.target.value})

    return(
        <div className="sesenta centrado">
            <div>
                <h3>Publicar una Reunión</h3>
            </div>
            <form className="publicar centrado" onSubmit = {e => onSubmit(e)}>
                <input type = "text" name = "title" value = {title} placeholder = "Título" onChange = {e => onChange(e)}  required/>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Crea una reunión"
                    value = {text}
                    onChange = {e => onChange(e)}
                    required
                ></textarea>
                <input type="submit" value="Publicar" />
            </form>
        </div>
    )
}

ReunionSection.propTypes = {
    addReunion: PropTypes.func.isRequired
}

export default connect(null, {addReunion})(ReunionSection);