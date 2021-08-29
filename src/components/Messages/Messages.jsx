import React from 'react';
import s from './Messages.module.css';
import DialogList from "./DIalogList/DialogList";
import Chat from "./Chat/Chat";

const Messages = () => {
    return <div className={s.messagesWrapper}>
        <DialogList />
        <Chat />
    </div>

}

export default Messages;