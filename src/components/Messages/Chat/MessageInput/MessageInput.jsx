import React from 'react';
import s from './MessageInput.module.css';

const MessageInput = () => {
    return <div className={s.inputWrapper}>
        <form className={s.form}>
            <input className={s.input} placeholder='Write a message...' name="input_message"></input>
            <button className={s.button}>SEND</button>
        </form>
    </div>

}

export default MessageInput;