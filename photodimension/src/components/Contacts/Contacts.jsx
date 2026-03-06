import React, { useState } from 'react';  
import './Contacts.css'; 
import axios from 'axios';

const Contacts = () => { 
  const [from, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const sendEmail = () => {

    if (from !== '' && subject !== '' && message !== '') {
      axios.get('http://localhost:3001/sendemail', {
        params: {
          from: from, 
          subject: subject, 
          message: message
        },
        withCredentials: true
      })
      .then(({message}) => {
        console.log("Success: " + message);
      })
      .catch(error => {
        setShowErrorMessage(true);
        setTimeout(() => {
          setShowErrorMessage(false);
        }, 3000);
        console.log("Error: " + error);
      });
  
      setEmail(''); 
      setSubject(''); 
      setMessage(''); 
  
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } else {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }


  }; 

  return (
    <div className="contacts-container">
      <div className="main-title-wrapper">
        <h1 className='main-title'>Здесь можно связаться со мной</h1> 
      </div>
       
      <div className="contacts-content-box">
        <div className="contactsWrapper">
            <div className='contact-form'>
                <input type="text" value={from} placeholder='Ваша почта' onChange={(e) => setEmail(e.target.value)} className='emailField' required />
                <input type="text" value={subject} placeholder='Ваше имя' onChange={(e) => setSubject(e.target.value)} className='emailField' required />
                {/* <input type="text" placeholder='Ваше сообщение' onChange={(e) => setMessage(e.target.value)} className='emailField' required /> */}
                <textarea cols="30" rows="10" value={message} placeholder='Ваше сообщение' onChange={(e) => setMessage(e.target.value)} className='emailMessageField' required />
                <button className='contactSendMessageButton' onClick={sendEmail}>Отправить письмо</button>
            </div>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="successMessagePopup">
          <span>Сообщение отправлено</span>
        </div>
      )}

      {showErrorMessage && ( 
        <div className="errorMessagePopup">
          <span>Ошибка при отправке сообщения</span>
        </div>
      )}

    </div>
  );
};

export default Contacts;
