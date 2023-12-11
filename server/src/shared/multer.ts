import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'upload_images/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const support = /png|jpg/;
    const extension = path.extname(file.originalname);

    if (support.test(extension)) {
      return cb(null, true);
    } else {
      return cb(new Error('File not supported'));
    }
  },

  limits: {
    fileSize: 5000000,
  },
});

export default uploader;
