import React from 'react';
import './Portfolio.css'; 
import Portrait from '../../макет/Картинки категорий/Портреты-2.jpg'; 
import Items from '../../макет/Картинки категорий/Предметы.jpg'; 
import Architecture from '../../макет/Картинки категорий/Архитектураjpg.jpg'; 
import Landscapes from '../../макет/Картинки категорий/Пейзажи.jpg'; 
import Creativity from '../../макет/Картинки категорий/Творчество.jpg'; 
import StreetPhotography from '../../макет/Картинки категорий/DSC_3399.jpg'; 
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className="main-title-wrapper">
        <h1 className='main-title'>Портфолио</h1> 
      </div>

      <div className="categories-container">
        
        <Link to={"/category/portraits"} className="black-bg">
          <div className="categories-item right-anim">
          
            <div className="categories-img"><img src={Portrait} alt="Портреты" /></div> 

            <div className="categories-item-text-box">
              <h2 className="categories-title">Портреты</h2>
              <p className="categories-text">
                Портрет – это соединение человека и окружения. Плохо получаются те портреты, которые сняты без естественного желания, когда человек безучастен окружению. Он получается словно цитата, вырванная из контекста. И наоборот, хорошие портреты – это всегда человек-в-мире, то есть, когда видна его вовлеченность в происходящее вокруг: он дополняет окружение, или окружение дополняет его. Шедевры получаются, когда соединяются сразу все компоненты – эстетика кадра, его идея и неразрывность человека с его окружением, когда они представляют единое целое.
              </p>
            </div>

          </div>
        </Link>

        <Link to={"/category/items"} className="black-bg">
          <div className="categories-item left-anim">

          <div className="categories-item-text-box">
            <h2 className="categories-title">Предметы</h2>
            <p className="categories-text">
              Суть предметной съемки может быть как художественная, так и чисто информационная. Художественная стремится передать какую-то идею или просто эстетику композиции. Цель информационной в том, чтобы выставить фокусный предмет в выгодном свете, осветив все его сильные и презентабельные стороны. Чаще всего используется в маркетинговых целях.
            </p>
          </div>

          <div className="categories-img"><img src={Items} alt="Предметы" /></div> 

        </div>
        </Link>

        <Link to={"/category/architecture"} className="black-bg">
          <div className="categories-item right-anim">

          <div className="categories-img"><img src={Architecture} alt="Архитектура" /></div> 

          <div className="categories-item-text-box">
            <h2 className="categories-title">Архитектура</h2>
            <p className="categories-text">
              Архитектурная съемка стремится запечатлеть здания в их величественности, исторической ценности. Каждое здание имеет свою атмосферу, свою суть. Архитектура передает настроение, если портретная съемка акцентирует внимание на субъекте и передает идею через человека, то архитектурная – на окружении, на условиях существования человека.  
            </p>
          </div>

        </div>
        </Link>

        <Link to={"/category/landscapes"} className="black-bg">
          <div className="categories-item left-anim">

          <div className="categories-item-text-box">
            <h2 className="categories-title">Пейзажи</h2>
            <p className="categories-text">
              Пейзажная съемка концентрируется на уникальности природных условий. Многие фотографы, в том числе и я, любят передавать эстетику пейзажей через драматические цвета, придавая картине эмоциональную глубину, как на примере справа. У каждого человека своя природа – у кого-то она полная цветов и красок, пестрящая насыщенностью, а у кого-то ее меньше. Кто-то любит открытые местности, а кто-то более уединенные. Природа это что-то глубоко личное, с помощью нее можно многое сказать и описать, ведь она – условия любых условий, она отражает жизнь как таковую, за что я ее и люблю.  
            </p>
          </div>

          <div className="categories-img"><img src={Landscapes} alt="Пейзажи" /></div> 

        </div>
        </Link>

        <Link to={"/category/creativity"} className="black-bg">
          <div className="categories-item right-anim">

          <div className="categories-img"><img src={Creativity} alt="Творчество" /></div> 

            <div className="categories-item-text-box">
              <h2 className="categories-title">Творчество</h2>
              <p className="categories-text">
                В этом разделе я публикую свои личные творческие идеи и задумки, заглянув в него, вы можете вдохновиться и, либо придумать свою собственную композицию, либо заинтересоваться уже существующей.  
              </p>
            </div>

          </div>
        </Link>

        <Link to={"/category/street"} className="black-bg">
          <div className="categories-item left-anim">

            <div className="categories-item-text-box">
              <h2 className="categories-title">Street фотография</h2>
              <p className="categories-text">
                Street фотография – это, буквально, уличная фотография. В этом разделе я выкладываю все, что приглянулось мне в качестве композиции. Случайные и непринужденные обстоятельства рисуют иногда лучше художников!
              </p>
            </div>

            <div className="categories-img"><img src={StreetPhotography} alt="Пейзажи" /></div> 

          </div>
        </Link>

      </div>




      <div className="categories-mobile-container">
        
        <Link to={"/category/portraits"} className="black-bg">
          <div className="categories-item right-anim">
            <div className="categories-img"><img src={Portrait} alt="Портреты" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Портреты</h2>
              <p className="categories-text">
                Портрет – это соединение человека и окружения. Плохо получаются те портреты, которые сняты без естественного желания, когда человек безучастен окружению. Он получается словно цитата, вырванная из контекста. И наоборот, хорошие портреты – это всегда человек-в-мире, то есть, когда видна его вовлеченность в происходящее вокруг: он дополняет окружение, или окружение дополняет его. Шедевры получаются, когда соединяются сразу все компоненты – эстетика кадра, его идея и неразрывность человека с его окружением, когда они представляют единое целое.
              </p>
            </div>

          </div>
        </Link>

        <Link to={"/category/items"} className="black-bg">
          <div className="categories-item left-anim">
            <div className="categories-img"><img src={Items} alt="Предметы" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Предметы</h2>
              <p className="categories-text">
                Суть предметной съемки может быть как художественная, так и чисто информационная. Художественная стремится передать какую-то идею или просто эстетику композиции. Цель информационной в том, чтобы выставить фокусный предмет в выгодном свете, осветив все его сильные и презентабельные стороны. Чаще всего используется в маркетинговых целях.
              </p>
            </div>

          </div>
        </Link>

        <Link to={"/category/architecture"} className="black-bg">
          <div className="categories-item right-anim">
            <div className="categories-img"><img src={Architecture} alt="Архитектура" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Архитектура</h2>
              <p className="categories-text">
                Архитектурная съемка стремится запечатлеть здания в их величественности, исторической ценности. Каждое здание имеет свою атмосферу, свою суть. Архитектура передает настроение, если портретная съемка акцентирует внимание на субъекте и передает идею через человека, то архитектурная – на окружении, на условиях существования человека.  
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/category/landscapes"} className="black-bg">
          <div className="categories-item left-anim">
            <div className="categories-img"><img src={Landscapes} alt="Пейзажи" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Пейзажи</h2>
              <p className="categories-text">
                Пейзажная съемка концентрируется на уникальности природных условий. Многие фотографы, в том числе и я, любят передавать эстетику пейзажей через драматические цвета, придавая картине эмоциональную глубину, как на примере справа. У каждого человека своя природа – у кого-то она полная цветов и красок, пестрящая насыщенностью, а у кого-то ее меньше. Кто-то любит открытые местности, а кто-то более уединенные. Природа это что-то глубоко личное, с помощью нее можно многое сказать и описать, ведь она – условия любых условий, она отражает жизнь как таковую, за что я ее и люблю.  
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/category/creativity"} className="black-bg">
          <div className="categories-item right-anim">
            <div className="categories-img"><img src={Creativity} alt="Творчество" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Творчество</h2>
              <p className="categories-text">
                Архитектурная съемка стремится запечатлеть здания в их величественности, исторической ценности. Каждое здание имеет свою атмосферу, свою суть. Архитектура передает настроение, если портретная съемка акцентирует внимание на субъекте и передает идею через человека, то архитектурная – на окружении, на условиях существования человека.  
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/category/street"} className="black-bg">
          <div className="categories-item left-anim">
            <div className="categories-img"><img src={StreetPhotography} alt="StreetPhotography" /></div> 
            <div className="categories-item-text-box">
              <h2 className="categories-title">Street фотография</h2>
              <p className="categories-text">
                Street фотография – это, буквально, уличная фотография. В этом разделе я выкладываю все, что приглянулось мне в качестве композиции. Случайные и непринужденные обстоятельства рисуют иногда лучше художников!
              </p>
            </div>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Portfolio;
