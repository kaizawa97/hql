const multer = require('multer');
const path = require('path');
require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.NODE_MULTER_PATH);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1E14);
    cb(null, String(Date.now() + uniqueSuffix + path.extname(file.originalname)));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || path.extname(file.originalname) === '.jpg' || path.extname(file.originalname) === '.png') {
    cb(null, true);
  } else {
    req.fileValidationError = 'goes wrong on the mimetype';
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
}).single('image');

exports.image = (req, res) => {
  upload(req, res, err => {
    try {
      if (req.fileValidationError) {
        const messeage = "only jpg or png"
        return messeage;
      }
      return req.file.path;
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: 'File upload failed. Please try again.'
      });
    }
  });
};

exports.getImageById = (req, res) => {

};