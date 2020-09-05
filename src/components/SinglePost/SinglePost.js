import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import persons from '../../commentor';
import { makeStyles } from '@material-ui/core/styles';
import './SinglePost.css';

const SinglePost = () => {
     
    const postStyles = makeStyles({
        root: {
          background: '#F0F0F0',
          border: 0,
          borderRadius: 3,
          padding: '2%',
        },
      });
      const posts = postStyles();

    const {id}=useParams();

    const [post, setPost] = useState({});
    const [comment,setComment]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    const commentlength=comment.length;
    const images=persons.slice(0,commentlength)

    
    return (
        <div className="singlePost">
           <div className={ posts.root }>
           <h4>Id:{post.id}</h4>
            <h3>Title:{post.title}</h3>
            <p>{post.body}</p>
           </div>
           <div>
           <h1>Comments</h1>
               {
                   comment.map(data=><Comment comment={data} image={images.pop()} commentlength={commentlength}></Comment>)
               }
           </div>

        </div>
    );
};

export default SinglePost;