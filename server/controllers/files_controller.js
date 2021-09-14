const multer = require('multer');
require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.NODE_MULTER_PATH);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1E9);
    cb(null, String(Date.now() + uniqueSuffix));
  }
});

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
    files: 10,
    fields: 10
  }
}).single('image');

exports.createImage = (req, res) => {
  if (!req.file) {
    console.log("No file upload");
    return res.status(400).send('No file upload');
  } else {
    console.log(req.file.filename)
  }
};

exports.getImageById = (req, res) => {
  getFilesList(req, res);
};