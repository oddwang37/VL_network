import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogItem = (props) => {
    DialogItem.propTypes = {
        name : PropTypes.string,
        id : PropTypes.string,
    }
    
    return <NavLink to={`/messages/${props.id}`}>
        <li className={s.dialogItem}>
            <img src='img/message-avatar-1.png' alt="profile pic" className={s.dialotItem_avatar}></img>
            <div className={s.lastMessage}>
                {props.name}
            </div>
        </li>
    </NavLink>

}

export default DialogItem;