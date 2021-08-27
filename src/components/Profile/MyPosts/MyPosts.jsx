import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = () => {
    return  <section className={s.posts}>
        <h3 className={s.post__heading}>My posts</h3>
        <form action="#" className={s.form_post}>
            <input className={s.post__newPost} name="new-post" placeholder="What's new? Write about it..."></input>
        </form>
        <ul className={s.postsList}>
            <Post message='Hi, how are you?' likes="5"/>
            <Post message='Hi, i`m Jhon' likes="10"/>
        </ul>
    </section>
}

export default MyPosts