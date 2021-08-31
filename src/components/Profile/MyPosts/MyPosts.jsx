/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
 
    let postsElements = props.postData.map((post) => {
        return <Post id={post.id} message={post.message} likes={post.likes}/>
    });



    let newPostElement = React.createRef();
    
    let addPostElement = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    props.addPost();
    return  <section className={s.posts}>
        <h3 className={s.post__heading}>My posts</h3>
        <form action="#" className={s.form_post}>
            <input ref={newPostElement} className={s.post__newPost} name="new-post" placeholder="What's new? Write about it..."></input>
            <button onClick={addPostElement} className={s.button_newPost}>Publish</button>
        </form>
        <ul className={s.postsList}>
          {postsElements}
        </ul>
    </section>
}

export default MyPosts