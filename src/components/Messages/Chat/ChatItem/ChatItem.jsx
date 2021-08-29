import React from 'react';
import s from './ChatItem.module.css';
import PropTypes from 'prop-types';

const ChatItem = (props) => {
        ChatItem.propTypes = {
                message: PropTypes.string,
        }

    return  <div className={s.item}>
            <img src='img/message-avatar-1.png' className={s.avatar} alt='chat avatar'></img>
            <div className={s.area}>
                <div className={s.text}>
                    {props.message}
                </div>
                <div className={s.time}>14:38</div>
            </div>
        </div>
}

export default ChatItem;