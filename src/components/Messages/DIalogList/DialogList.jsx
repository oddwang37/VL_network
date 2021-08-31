/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import s from './DialogList.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) => {

    let dialogElements = props.dialogData.map((d) => {
        return <DialogItem id={d.id} name={d.name}/>
    });

    return <ul className={s.dialogsList}>
          {dialogElements}
        </ul>
  


}

export default DialogList;