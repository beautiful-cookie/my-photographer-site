import React from 'react'; 
import './Footer.css'; 
import vk from '../../макет/Логотипы/vk-logo-black.png';
import tg from '../../макет/Логотипы/tg-black-logo.png';
import inst from '../../макет/Логотипы/instagram-logo-black-1.png';

const Footer = () => {
  return (
    <footer>
      <div className="contacts-information">

        <div className="contacts-block">
          <h2 className="footer-contacts">Контакты:</h2> 
          <p className="phone-mail">Тел: +37377907026</p>
          <p className="phone-mail">Email: maxim.khadeev@gmail.com</p>
        </div>

        <div className="social-block">

          <a href="https://vk.com/mrkell1" target="_blank" rel="noreferrer" className="social-item">
            <img src={vk} alt="Вконтакте" className="social-img" />
            <span className="contact-name">Вконтакте</span>
          </a>

          <a href="https://www.instagram.com/dyedindream/" target="_blank" rel="noreferrer" className="social-item">
            <img src={inst} alt="Инстаграм" className="social-img" />
            <span className="contact-name">Инстаграм</span>
          </a>

          <a href="https://t.me/pictureminded" target="_blank" rel="noreferrer" className="social-item">
            <img src={tg} alt="Телеграм" className="social-img" />
            <span className="contact-name">Телеграм</span>
          </a>

        </div>

      </div>

      <p className="copyright">© 2024. Все права защищены</p>
    </footer>
  );
};

export default Footer;
