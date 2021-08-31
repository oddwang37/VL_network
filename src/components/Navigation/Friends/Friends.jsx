/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {

  let friendsElements = props.friends.map((friend) => {
    return <FriendItem name={friend.name}/>
  })

  return <div>
    <div className={s.heading}>Friends</div>
    <div className={s.friendList}>
      {friendsElements}
    </div>
  </div>
}

export default Friends;