import React from 'react'; 
import './AboutMe.css'; 
import aboutMeImg from '../../макет/Картинки категорий/AboutMe.jpg'; 
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="main-title-wrapper">
        <h1 className='main-title'>Photography by Maxim Khadeev</h1> 
      </div>

      <div className="aboutme-content">  
        <div className="img-box">
          <img className="aboutme-img" src={aboutMeImg} alt="About Me" /> 
          <p className="img-text">
            Раскрашивая реальность в цвета
          </p>
        </div>
        <div className="aboutme-text-content">
          <h2 className='aboutme-title'>Обо мне</h2> 
          <p className='aboutme-text'>
            Привет! Меня зовут Максим, я сравнительно недавно увлекся фотографией и уже успел набрать некоторое портфолио. Мне нравится запечатлевать отдельные моменты жизни, ведь в них выражается сущность человека. Вы никогда не замечали, что по одной только естественной фотографии можете предположить какой человек в жизни? В кадре мы уязвимы - и именно это заставляет нас с одной стороны бояться, а с другой любить фотографироваться одновременно. Нам не нравится, когда нас застают врасплох, ведь мы “не подготовлены” для презентации себя, однако вместе с тем нам больше всего нравятся именно те фотографии, которые были сняты без специальной подготовки, ведь в них мы видим мир и человека такими, какие они есть на самом деле. Будьте естественны, будьте собой, а я помогу вам в этом!
          </p>
          <NavLink className='aboutme-link' to="/portfolio">Мое портфолио</NavLink>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;

