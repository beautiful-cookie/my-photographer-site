import React, { useEffect, useState } from 'react';
import './CategoryComponent.css';  
import { useParams } from 'react-router-dom'; 
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';

const CategoryComponent = () => { 

  const {category_name} = useParams(); 
  const [ titleName, setTitleName ] = useState(""); 
  const [showImgUrl, setShowImg] = useState("");  
  const [openPopup, setOpenPopup] = useState(false); 
  const [imgsData, setImgsData] = useState(null); 


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/category/${category_name}/images`);
      const imgsData = response.data;
      setImgsData(imgsData);
    }
  
    fetchData();

    switch (category_name) {
      case "portraits":
        setTitleName("Портреты"); 
        break;

      case "items":
        setTitleName("Предметы"); 
        break;
    
      case "architecture":
        setTitleName("Архитектура"); 
        break;

      case "landscapes":
        setTitleName("Пейзажи"); 
        break;

      case "creativity":
        setTitleName("Творчество"); 
        break;

      case "street":
        setTitleName("Street фотография"); 
        break;
      
      default:
        setTitleName("Такой категории не существует"); 
        break;
    }
  }, [category_name]);

  
  const openImage = (img) => {
    setShowImg(img); 
    setOpenPopup(true); 
  }


  return (
    <div className='portfolio-container'>
      <div className="main-title-wrapper">
        <h1 className='main-title'>{titleName}</h1> 
      </div>
       
      <div className="photos-container">
        {imgsData && imgsData.map((img) => (
          <div className="phototItemWrapper" onClick={() => openImage(img.url)} key={img.id}>
            <img className="photo-item" src={img.url} alt={img.alt}  />
          </div>
        ))}
      </div>  

      <div className={`photosPopup ${openPopup ? 'ppActive' : ''}`} onClick={() => setOpenPopup(!openPopup)}>
        <div className={`imgPopupWrapper ${openPopup ? 'ppImgAnimationActive' : ''}`} onClick={(e) => e.stopPropagation()}>
          <img src={`${showImgUrl ? showImgUrl : ''}`} alt="Фотография не выбрана" />
          <IoCloseCircleOutline  size={40} className="ppClose" onClick={() => setOpenPopup(false)} />
        </div>
      </div>

    </div>
  );
};

export default CategoryComponent;
