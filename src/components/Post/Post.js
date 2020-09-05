import React, { useEffect,useState } from 'react';
import PostDetail from '../PostDetail/PostDetail';
import './Post.css';

const Post = () => {
     const [post, setpost] = useState([]);
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>setpost(data))
  },[])
  console.log(post);
    return (
        <div className="mainpost">
            <h1>Daily News</h1>
            {
                post.map(data=><PostDetail post={data}></PostDetail>)
            }
        </div>
    );
};

export default Post;