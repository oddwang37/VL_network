/* eslint-disable react/prop-types */
import React from 'react';
import s from './FriendItem.module.css';


const FriendItem = (props) => {
    return <div className={s.friendItem}>
      <img src="img/message-avatar-1" className={s.friendPhoto}></img>
      <div className={s.friendName}>{props.name}</div>
    </div>
}

export default FriendItem;