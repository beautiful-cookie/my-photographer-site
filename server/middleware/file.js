const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const category = req.params.category; 
    cb(null, path.join('images', category ? category : 'portraits')); 
  },
  filename(req, file, cb) {
    const maxTimeValue = 9999999999999; // Примерно соответствует максимальному значению Date.now()
    const uniqueSuffix = maxTimeValue - Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50000000 }, // Ограничение размера файла (10 МБ)
});

