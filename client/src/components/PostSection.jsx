import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../actions/post';

import '../styles/components/PublicarSection.css'


const ReunionSection = ({addPost}) => {

	const [formData, setFormData] = useState({
        text: '',
        title: ''
    });

    const [postImg, setPostImg] = useState({});

    const  {title, text} = formData;
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(postImg);
        const data = new FormData();
        data.append("file",postImg);
        addPost({text, title, postImg});   
    }

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    

    return(
        <div className="sesenta centrado">
            <div>
                <h3>Publicar un Post</h3>
            </div>
            <form className="publicar centrado" onSubmit = {e => onSubmit(e)}>
                <input type = "text" name = "title" value = {title} placeholder = "Título" onChange = {e => onChange(e)}  required/>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Crea un post"
                    value = {text}
                    onChange = {e => onChange(e)}
                    required
                ></textarea>
                
                <input type = "file" onChange = {e => {const img = e.target.files[0]; setPostImg(img)}} />
                
                <input type="submit" value="Publicar" />
            </form>
        </div>
    )
}

ReunionSection.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(ReunionSection);