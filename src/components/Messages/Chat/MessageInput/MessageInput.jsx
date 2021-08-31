import React from 'react';
import s from './MessageInput.module.css';

const MessageInput = () => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return <div className={s.inputWrapper}>
        <form className={s.form}>
            <input ref={newMessageElement} className={s.input} placeholder='Write a message...' name="input_message"></input>
            <button onClick={sendMessage}className={s.button}>SEND</button>
        </form>
    </div>

}

export default MessageInput;