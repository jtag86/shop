import React from 'react'
import logo from '../../assets/img/logo.png'
import cl from './Header.module.css'

const Header = () => {
  return (
    <div className={cl.header}>
      <div>
        <img src={logo} style={{height: "auto", width: "auto"}}/>
      </div>
      <div className={cl.header__center}>
        <div>+7 <span style={{color: 'red'}}>(1111)</span> 11-11-11</div>
        <div>+7 (2222) 22-22-22</div>
        Ваш город: Алматы <br/>
        Адреса и телефоны
      </div>
      <div>
        <div>Вход в личный кабинет</div>
        <div>Регистрация</div>
        
      </div>
    </div>
  )
}

export default Header