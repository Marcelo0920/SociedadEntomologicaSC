import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../actions/post';

import '../styles/components/PublicarSection.css'


const PostSection = ({addPost}) => {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if(url){
            addPost({title, text, url});
            console.log("Succesfully posted");
            setLoading(false);
        }
    }, [url]);
    
    const onSubmit = e => {
        e.preventDefault();
       // const files = e.target.files[0];
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "sociedad_entomologica_crucena");
        data.append("cloud_name", "dvqsabodr")
        setLoading(true);

        //axios.post('https://api.cloudinary.com/v1_1/dvqsabodr/image/upload', data)
        fetch("	https://api.cloudinary.com/v1_1/dvqsabodr/image/upload",
            {method: "post",
            body: data
            })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url);
            })
            .catch(err => {
                console.log(err);
            })

    }
/* 
    const onSubmit = e => {
        e.preventDefault();
        console.log(postImg);
        const data = new FormData();
        data.append("file",postImg);
        addPost({text, title, postImg});   
    } */

    

    return(
        <div className="sesenta centrado">
            <div>
                <h3>Publicar un Post</h3>
            </div>
            <form className="publicar centrado" onSubmit = {e => onSubmit(e)}>
                <input type = "text" name = "title" value = {title} placeholder = "Título" onChange = {e => {setTitle(e.target.value)}}  required/>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Crea un post"
                    value = {text}
                    onChange = {e => {setText(e.target.value)}}
                    required
                ></textarea>
                {loading? <p>Subiendo Post...</p> : <p></p>}
                <input type = "file" onChange = {e => setImage(e.target.files[0])} />
                
                <input type="submit" value="Publicar" />
            </form>
        </div>
    )
}

PostSection.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostSection);