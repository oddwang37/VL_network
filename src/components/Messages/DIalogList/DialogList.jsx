/* eslint-disable react/jsx-key */
import React from 'react';
import s from './DialogList.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogList = () => {

    let dialogData = [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Jhon'},
        {id: 4, name: 'Cristian'},
        {id: 5, name: 'Hanz'},
        {id: 6, name: 'Ashley'},
    ]

    let dialogElements = dialogData.map((d) => {
        return <DialogItem id={d.id} name={d.name}/>
    });

    return <ul className={s.dialogsList}>
          {dialogElements}
        </ul>
  


}

export default DialogList;