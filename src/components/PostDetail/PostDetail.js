import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './PostDetail.css';


const PostDetail = (props) => {
    const {id,title,body}=props.post;

    return (
        <div className="main">  
            <h4>ID:{id}</h4>
            <h2>Title:{title}</h2>
            <p>{body}</p>
            <Link className="link" to={`/post/${id}`}><Button variant="contained" color="primary">Read More</Button></Link>
        </div>
    );
};

export default PostDetail;