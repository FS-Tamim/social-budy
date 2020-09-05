import React, { useState } from 'react';
import './Comment.css';


const Comment = (props) => {
    const {name,email,body}=props.comment;

    return (
        <div className="comment">              
                  <div>
                  <img src={props.image.image}/>
                  </div>
                  <div className="details">
                  <h3>{name}</h3>
                  <p>{email}</p>
                  <p>{body}</p>
                  </div>
              
                
              
        </div>
    );
};

export default Comment;