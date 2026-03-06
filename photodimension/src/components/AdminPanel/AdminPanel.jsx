import React, { useEffect, useState } from "react"; 
import './AdminPanel.css'; 
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const AdminPanel = () => { 
    const [files, setFiles] = useState([]);  
    const [dragActive, setDragActive] = useState(false);  
    const [popup, setPopup] = useState(false); 
    const [categoryToUpload, setCategoryToUpload] = useState("portraits"); 
    const [initialCategory, setInitialCategory] = useState("Категория"); 
    

    const chooseCategory = (chosenCategory) => {
        setCategoryToUpload(chosenCategory); 
        setPopup(!popup); 
    }
    const handleChange = (e) => {
        e.preventDefault(); 

        if (e.target.files && e.target.files[0]) {
            setFiles([...e.target.files]);  
        }; 
    }; 
    const handleDrag = (e) => {
        e.preventDefault();  

        setDragActive(true); 
    }; 
    const handleLeave = (e) => {
        e.preventDefault(); 

        setDragActive(false); 
    }; 
    const handleDrop = (e) => {
        e.preventDefault(); 

        setDragActive(false); 
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles([...e.dataTransfer.files]); 
        }
    }; 
    const handleReset = (e) => {
        setFiles([]); 
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const data = new FormData(); 
        files.forEach((file) => {
            data.append('files', file); 
        }); 
        data.append('category', categoryToUpload);  
        await axios.post(`/category/${categoryToUpload}/upload`, data, {
            headers: { 
              'Content-Type': 'multipart/form-data' 
            }
        }); 
        setFiles([]); 
    }; 

    useEffect(() => {
        switch (categoryToUpload) {
          case "portraits":
            setCategoryToUpload("portraits"); 
            setInitialCategory("Портреты"); 
            break;
    
          case "items":
            setCategoryToUpload("items"); 
            setInitialCategory("Предметы"); 
            break;
        
          case "architecture":
            setCategoryToUpload("architecture"); 
            setInitialCategory("Архитектура"); 
            break;
    
          case "landscapes":
            setCategoryToUpload("landscapes"); 
            setInitialCategory("Пейзажи"); 
            break;
    
          case "creativity":
            setCategoryToUpload("creativity"); 
            setInitialCategory("Творчество"); 
            break;
    
          case "street":
            setCategoryToUpload("street"); 
            setInitialCategory("Street фотография"); 
            break;
          
          default:
            setCategoryToUpload("portraits"); 
            setInitialCategory("Категория"); 
            break;
        }
      }, [categoryToUpload]);  


    return (
        <div className="admin-container">
            <div className="main-title-wrapper">
                <h1 className='main-title'>Админ панель</h1> 
            </div>

            <div className="admin-content-box"> 
                <div className="dragANDdropBox">
                    <h1 className="ddH1">Drag & Drop</h1> 
                    <form 
                    className={`ddForm ${dragActive ? 'drag' : ''}`} 
                    onDragEnter={handleDrag} 
                    onDragOver={handleDrag} 
                    onDragLeave={handleLeave} 
                    onDrop={handleDrop}
                    onReset={handleReset} 
                    onSubmit={handleSubmit}
                    >
                        <h2 className="ddH2">Перетащи файлы сюда</h2>
                        <p className="ddP">или</p> 
                        <label className="ddLabel">
                            <span className="ddSpan">Загрузи файлы</span> 
                            <input type="file" className="ddInput" onChange={handleChange} multiple={true} />
                        </label>
                        {files.length > 0 && (
                            <>
                                <ul className="ddFileLlist">
                                    {files.map(({name}, id) => (
                                        <li className="ddLi" key={id}>{name}</li>
                                        ))}
                                </ul> 
                                <div className="ddbtns">
                                    <button className="ddBtnReset" type="reset">Отменить</button>
                                    <button className="ddBtnSubmit" type="submit">Отправить</button>
                                </div>
                            </>
                        )} 
                    </form>
                </div>
            </div>

            <div className="CategoryBtnWrapper"><div className="CategoryBtn" onClick={() => setPopup(!popup)}>{initialCategory}</div></div>

            <div className={`ddPopup ${popup ? 'ddactive' : ''}`} onClick={() => setPopup(!popup)}>
                <div className="ddWrapper" onClick={(e) => {e.stopPropagation()}}>
                    <div className="ddPopupHeader">
                        <h1 className="ddPopupHeaderH1">Категории</h1>
                        <AiOutlineClose size={35} className="ddClose" onClick={() => setPopup(!popup)}/> 
                    </div> 
                    <div className="ddPopupBody">
                        <div className="ddPopupUl">
                            <div className="ddPopupLi" onClick={() => chooseCategory("portraits")}>Портреты</div>
                            <div className="ddPopupLi" onClick={() => chooseCategory("items")}>Предметы</div>
                            <div className="ddPopupLi" onClick={() => chooseCategory("architecture")}>Архитектура</div>
                            <div className="ddPopupLi" onClick={() => chooseCategory("landscapes")}>Пейзажи</div>
                            <div className="ddPopupLi" onClick={() => chooseCategory("creativity")}>Творчество</div>
                            <div className="ddPopupLi" onClick={() => chooseCategory("street")}>Street фотография</div>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default AdminPanel; 