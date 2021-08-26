import React, {useState} from 'react';


import CommentSection from '../components/CommentSection';
import ApplySection from '../components/ApplySection';

import '../styles/pages/Publicaciones.css';


const Comments = () => {

    const Comment = ["Comments", "Applies"];
    const[myComment, setMyComment] = useState("Comments");

    return(
        <section className = "ochenta centrado">
            <div className = "navegacion-publicaciones">
                {
                    Comment.map(Navigate => (
                        <button
                            type = "button"
                            key = {Navigate}
                            className = {""}
                            onClick = {() => setMyComment(Navigate)}
                        >
                            {Navigate}
                        </button>
                    ))
                }
            </div>
            <div className = "articulos">
                {myComment == "Comments" && <CommentSection/>}
                {myComment == "Applies" && <ApplySection />}
            </div>
        </section>
    )
}

export default Comments;