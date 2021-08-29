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
}).single('file');

// exports.createImage = upload.single('image'),(req, res) => {
//     try {
//       await uploadFile(req, res);
  
//       if (req.file == undefined) {
//         return res.status(400).send({ message: "Please upload a file!" });
//       }
  
//       res.status(200).send({
//         message: "Uploaded the file successfully: " + req.file.originalname,
//       });
//     } catch (err) {
//       if (err.code == "LIMIT_FILE_SIZE") {
//         return res.status(500).send({
//           message: "File size cannot be larger than 5MB!",
//         });
//       }
//       res.status(500).send({
//         message: `Could not upload the file: ${req.file.originalname}. ${err}`,
//       });
//     }
// };