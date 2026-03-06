import React, { useState } from 'react';
import './Header.css';
import logo from './../../макет/Логотипы/logo-3.png'; 
import bookmarkvk from './../../макет/Логотипы/bookmark-vk.png'; 
import bookmarktg from './../../макет/Логотипы/bookmark-tg.png'; 
import bookmarkinst from './../../макет/Логотипы/bookmark-inst.png'; 
import { NavLink } from 'react-router-dom'; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';   


const Header = () => { 
    
  const [ nav, setNav] = useState(true); 

  return (
    <>
      <header className="transparent-header">
        <div className="logo-container">
          <img src={logo} alt="Логотип" className="logo" />
        </div>

        <div className="bookmarks-container">
          <a  href="https://vk.com/mrkell1" target="_blank" rel="noreferrer"><img src={bookmarkvk} alt="Закладка" className="bookmark" /></a>
          <a href="https://t.me/pictureminded" target="_blank" rel="noreferrer"><img src={bookmarktg} alt="Закладка" className="bookmark" /></a>
          <a href="https://www.instagram.com/dyedindream/" target="_blank" rel="noreferrer"><img src={bookmarkinst} alt="Закладка" className="bookmark" /></a>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Обо мне</NavLink>
          <NavLink to="/portfolio">Портфолио</NavLink>
          <NavLink to="/prices">Цены</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>

        { nav 
        ? 
        <AiOutlineMenu size={45} className="mobile-menu" onClick={() => setNav(!nav)} /> 
        : 
        <AiOutlineClose size={45} className="mobile-menu" onClick={() => setNav(!nav)}/> 
        }
      </header>
      
      
      <nav className={ !nav ?  "nav-links-mobile" + " active-mobile-nav-links" : "nav-links-mobile"}>
          <NavLink to="/">Обо мне</NavLink>
          <NavLink to="/portfolio">Портфолио</NavLink>
          <NavLink to="/prices">Цены</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
      </nav>
    </>
  );
};

export default Header;
