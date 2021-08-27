import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <a href="#">
            <img src="img/logo.svg" className={s.header__logo}></img>
        </a>
        <div className={s.header__logout}>Logout</div>
    </header>
}

export default Header;