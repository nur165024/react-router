import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id,title,body} = props.post;
    const history = useHistory();
    const clickComment = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3>Post Id : {id}</h3>
            <h3>Post Title : {title}</h3>
            <p>Post Details : {body}</p>
            <button onClick={() => clickComment(id)}>Click Comment</button>
        </div>
    );
};

export default Post;