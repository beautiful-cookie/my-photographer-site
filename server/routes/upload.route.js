const { Router } = require('express');
const fileMiddleware = require('../middleware/file');
const path = require('path');
const fs = require('fs');

const router = Router();


async function getImagesByCategory(category) {

  const imagesPath = path.join('images', category);
  const files = await fs.promises.readdir(imagesPath);

  const images = files.map((file) => ({
    url: path.join('/images', category, file),
    alt: file,
    id: Date.now() + '-' + Math.round(Math.random() * 1E9), 
  }));

  return images;
}



router.post(
  '/:category/upload',
  fileMiddleware.array('files', 10), 
  (req, res) => {
    try { 
      if (req.files) {
        res.json(req.files);
        // Здесь можно отправить файлы в базу данных (MongoDB)
      } else {
        res.status(400).json({ message: 'Файлы не загружены' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  }
); 

router.get('/:category/images', async (req, res) => {
  try {
    const category = req.params.category;

    if (category) {
      const images = await getImagesByCategory(category);
      res.json(images);
    } else {
      res.status(400).json({ message: 'Неверная категория' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});



module.exports = router;
