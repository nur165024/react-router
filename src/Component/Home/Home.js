import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post,setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));

    },[])
    return (
        <div>
            <h3>this is home page content</h3>
            <p>total post : {post.length}</p>
            <hr/>
            {
                post.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;