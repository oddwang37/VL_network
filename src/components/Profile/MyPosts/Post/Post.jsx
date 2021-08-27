import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.module.css';

const Post = (props) => {

   Post.propTypes = {
      message: PropTypes.string,
      likes: PropTypes.string,
   }
   return <li className={`${s.postList__item} ${s.postItem}`}>
        <img src="./../../../img/post-avatar.png" className="post-item__author-img" alt='asdasd'/>
       <div className={s.postItem__text}>{props.message}</div>
       <div className={s.postItem__likes}>{props.likes}</div>
    </li>
}

export default Post;