import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <main className={s.profilePage}>
    <img src="img/profile-bg.png" className={s.profileBg}></img>
    <section className="profile">
      <div className={s.profileWrapper}>
        <img src="./img/profile-avatar.png" className={s.profile__avatar}></img>
        <div className={s.profileInfo}>
          <div className={s.profileInfo__name}>Vladislav Selivanov</div>
          <ul className={s.profileInfo__list}>
                <li className={s.profileInfo__item}>Date of birth: 18 october </li>
                <li className={s.profileInfo__item}>City: Omsk</li>
                <li className={s.profileInfo__item}>Education: OmSTU&apos;11</li>
          </ul>
        </div>
      </div>
    </section>
    <MyPosts />
  </main>
}

export default Profile;