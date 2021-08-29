/* eslint-disable react/jsx-key */
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'Hi, i`m Jhon!', likes: 10},
    ]
    let postsElements = postData.map((post) => {
        return <Post id={post.id} message={post.message} likes={post.likes}/>
    });

    return  <section className={s.posts}>
        <h3 className={s.post__heading}>My posts</h3>
        <form action="#" className={s.form_post}>
            <input className={s.post__newPost} name="new-post" placeholder="What's new? Write about it..."></input>
        </form>
        <ul className={s.postsList}>
          {postsElements}
        </ul>
    </section>
}

export default MyPosts