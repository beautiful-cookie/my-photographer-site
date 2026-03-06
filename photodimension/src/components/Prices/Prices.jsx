import React from 'react';
import './Prices.css';
import individual from "../../макет/Prices & Reference Generation/Leonardo_Diffusion_XL_A_strikingly_captivating_portrait_the_su_1.jpg";
import events from "../../макет/Prices & Reference Generation/Leonardo_Diffusion_XL_In_a_cinematic_style_that_captures_the_e_0.jpg";
import food from "../../макет/Prices & Reference Generation/Leonardo_Diffusion_XL_Create_a_photo_that_visually_conveys_the_0.jpg";
import reportage from "../../макет/Prices & Reference Generation/Leonardo_Diffusion_XL_Capture_the_moment_where_a_professional_1.jpg";

const Prices = () => {
  return (
    <div className="prices-container">
        <div className="main-title-wrapper">
            <h1 className='main-title'>Цены</h1> 
        </div>
        
        <div className="prices-content-box">
            <div className="prices-wrapper">

              <div className="prices-item">
                <img src={individual} alt="" className="prices-img" />
                <div className="prices-info">
                  <div className="prices-info-wrapper">
                    <h1 className="prices-h1">Индивидуальная фотосессия</h1>
                    <p className="prices-text">
                      Пакет “Стандарт” (1 час съемок + 10 обработанных фото на выбор): от 600р.
                    </p>
                    <p className="prices-text">
                      Пакет “Премиум” (1.5 часа съемок + 15 обработанных фото на выбор): от 700р.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prices-item">
                <img src={events} alt="" className="prices-img" />
                <div className="prices-info">
                  <div className="prices-info-wrapper">
                    <h1 className="prices-h1">Фотосъемка мероприятий</h1>
                    <p className="prices-text">
                      Детский праздник/День рождения (1 час): от 1000р.
                    </p>
                    <p className="prices-text">
                      Корпоратив (1 час): от 1000р.
                    </p>
                    <p className="prices-text">
                      Юбилей (1 час): от 1500р.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prices-item">
                <img src={food} alt="" className="prices-img" />
                <div className="prices-info">
                  <div className="prices-info-wrapper">
                    <h1 className="prices-h1">Food фотография</h1>
                    <p className="prices-text">
                      Пакет “Стандарт” (1 блюдо на белом фоне): от 600р./фото на выбор
                    </p>
                    <p className="prices-text">
                      Пакет “Премиум” (несколько блюд в композиции + обработка): от 1000р./фото на выбор
                    </p>
                  </div>
                </div>
              </div>

              <div className="prices-item">
                <img src={reportage} alt="" className="prices-img" />
                <div className="prices-info">
                  <div className="prices-info-wrapper">
                    <h1 className="prices-h1">Репортаж</h1>
                    <p className="prices-text">
                      Репортажная съемка от 1500р./час
                    </p>
                  </div>
                </div>
              </div>

            </div>
        </div>

    </div>
  );
};

export default Prices;  
