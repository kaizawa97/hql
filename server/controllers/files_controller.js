const multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
  onFileUploadStart: function (file, req, res) {
    console.log(file.fieldname + ' is starting ...')
  }
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
    files: 10,
    fields: 10
  }
});

exports.createImage = (req, res) => {
    upload()
    .then(() => {
      if (req.file == undefined) {
        res.status(400).send('Please upload image or video');
      }

      res.status(200).send({
        messeage: 'Image uploaded successfully' + req.file.originalname
      })
        .catch(err => {
          res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
        });
    });
};