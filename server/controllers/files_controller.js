const multer = require('multer');
const path = require('path');
require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.NODE_MULTER_PATH);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1E9);
    cb(null, String(Date.now() + uniqueSuffix + path.extname(file.originalname)));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    req.fileValidationError = 'goes wrong on the mimetype';
    cb(null, false);
  }
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
    files: 10,
    fields: 10
  },
  fileFilter: fileFilter
}).single('image');

exports.createImage = (req, res) => {
  console.log(req);
  if (req.fileValidationError) {
    return res.status(400).json({
      message: "only jpg or png"
    });
  }
  if (req.file) {
    return res.status(200).send(req.file.filename);
  } else {
    return res.status(400).json({
      message: "noFileUploaded"
    });
  }  
};

exports.getImageById = (req, res) => {
  getFilesList(req, res);
};