/* eslint-disable react/prop-types */
import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends';



const Navigation = (props) => {
    return <aside className={s.aside}>
    <nav className={s.aside_nav}>
      <ul className={s.navList}>
        <li className={s.navList__item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
        <li className={s.navList__item}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
        <li className={s.navList__item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
        <li className={s.navList__item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
        <li className={`${s.navList__item} ${s.navList__item_mt40}`}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
      </ul>
    </nav>
    <Friends friends={props.friends} />
  </aside>
}

export default Navigation;