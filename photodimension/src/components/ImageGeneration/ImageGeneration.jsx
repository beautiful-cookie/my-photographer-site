import React, { useEffect, useState } from 'react';
import './ImageGeneration.css';  
import referenceExample from '../../макет/Prices & Reference Generation/Leonardo_Diffusion_XL_A_captivatingly_ethereal_portrait_the_ma_1.jpg';
import FormData from 'form-data'; 
import fs from 'fs'; 
import axios from 'axios'; 
import Reference from './References/image.jpg'; 

class Text2ImageAPI {
    constructor(url, apiKey, secretKey) {
        this.URL = url;
        this.AUTH_HEADERS = {
            'X-Key': `Key ${apiKey}`,
            'X-Secret': `Secret ${secretKey}`,
        };
    }

    async getModels() {
      const response = await axios.get(`${this.URL}key/api/v1/models`, { headers: this.AUTH_HEADERS });
      return response.data[0].id;
    }

    async generate(prompt, model, images = 1, width = 1024, height = 1024, style = 3) {
        const styles = ["KANDINSKY", "UHD", "ANIME", "DEFAULT"];
        const params = {
            type: "GENERATE", 
            numImages: images,
            width,
            height,
            style: styles[style],
            generateParams: {
                query: prompt
            }
        };

        const formData = new FormData();
        const modelIdData = { value: model, options: { contentType: 'application/json' } };
        const paramsData = { value: JSON.stringify(params), options: { contentType: 'application/json' } };

        const modelIdDataBlob = new Blob([JSON.stringify(model)], { type: 'application/json' });
        const paramsBlob = new Blob([JSON.stringify(params)], { type: 'application/json' });

        formData.append('model_id', modelIdDataBlob);
        formData.append('params', paramsBlob);

        const response = await axios.post(`${this.URL}key/api/v1/text2image/run`, formData, {
          headers: {
              ...this.AUTH_HEADERS,
              'Content-Type': 'application/json' 
          },
      });
        const data = response.data;
        return data.uuid;
    }

    async checkGeneration(requestId, attempts = 10, delay = 10) {
      while (attempts > 0) {
        try {
          const response = await axios.get(`${this.URL}key/api/v1/text2image/status/${requestId}`, { headers: this.AUTH_HEADERS });
          const data = response.data;
          if (data.status === 'DONE') {
            return data.images;
          }
        } catch (error) {
          // обрабатываем ошибку
          console.error(error);
        }
        attempts--;
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
      }
    }
    
}


const ImageGeneration = () => { 

  const [generatedImage, setGeneratedImage] = useState(null);  

  const GenerateReference = async (prompt) => { 
    const api = new Text2ImageAPI('https://api-key.fusionbrain.ai/', 'CFF38AF6CE46B818761AF08844C4365C', 'B3DDECFD7088362DA5F4884753008780');
    const modelId = await api.getModels();
    const uuid = await api.generate(prompt, modelId, 1, 1024, 1024, 1);
    const images = await api.checkGeneration(uuid);
    const base64String = images[0];  
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
    const buffer = Buffer.from(base64Data, 'base64'); 
    console.log("Процесс запущен!"); 
  
    fs.writeFile('./References/image.jpg', buffer, 'base64', (err) => {
      if (err) throw err;
    });
  }; 


  return (
    <div className='generation-container'>
        <div className="main-title-wrapper">
          <h1 className='main-title'>Генерация изображений</h1> 
        </div>
      
        <div className="generation-box">
            <div className="refDefinitionText">
                <h2 className="refDefH2">Что такое референс?</h2>
                <p className="refDefP">
                    Референс в мире фотографии – это мощный инструмент, который помогает воплотить ваши идеи в кадр. Это изображение или набор изображений, служащих вдохновением и ориентиром в процессе создания фотографии. Референсы помогают уточнить ваше видение, определить стиль, цветовую гамму и композицию.
                </p>
            </div>
            <div className="refDefinitionImage">
                <img src={referenceExample} alt="Пример картинки" />
            </div>
        </div>

        <div className="GIinputWrapper">
            <input type="text" placeholder='Введите текст референса...' className="GIinput" />
            <div className="GIinputBtn" onClick={() => GenerateReference("Язык программирования JavaScript")}>Отправить</div>
        </div>

        {/* <div className="fussionBrainDescription">
            <p className="fbDescrText">
                Fusion Brain - это компания, которая предоставляет возможность бесплатно генерировать любые картинки по вашему запросу. Введите в строку запроса то, что хотите увидеть в качестве референса и искуственный интеллект сгенерирует изображение. При генерации референса ai иногда может допускать дефекты рук или ног. Если они не сильно портят общую композицию и ее идею, не обращайте на них внимание
            </p>
        </div> */} 

        {generatedImage && (
            <div className="generated-image">
                <img src={generatedImage} alt="Сгенерированное изображение" />
            </div>
        )}

        <img src={Reference} alt="Сгенерированное изображение" />


    </div>
  );
};

export default ImageGeneration;
