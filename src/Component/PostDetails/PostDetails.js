import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {id} = useParams();
    const [postDetails,setPostDetails] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetails(data))
    },[]);

    const {title,body} = postDetails;
    
    return (
        <div>
            <h2>This is post details : {id}</h2>
            <h3>Post Title : {title}</h3>
            <p>Post Details : {body}</p>
        </div>
    );
};

export default PostDetails;