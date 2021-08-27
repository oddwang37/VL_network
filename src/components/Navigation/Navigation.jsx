import React from 'react';
import s from './Navigation.module.css';


const Navigation = () => {
    return <aside className={s.aside}>
    <nav className={s.aside_nav}>
      <ul className={s.navList}>
        <li className={s.navList__item}><a href="#">Profile</a></li>
        <li className={s.navList__item}><a href="#">Messages</a></li>
        <li className={s.navList__item}><a href="#">News</a></li>
        <li className={s.navList__item}><a href="#">Music</a></li>
        <li className={`${s.navList__item} ${s.navList__item_mt40}`}><a href="#">Settings</a></li>
      </ul>
    </nav>
  </aside>
}

export default Navigation;