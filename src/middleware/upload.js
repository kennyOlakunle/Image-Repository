// The util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well

const util = require('util');

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

// storage configuration object with GridFsStorage class
// multer-gridfs-storage module will create a mongodb connection for you automatically

var storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/repository_files_db',
  options: { useNewUrlParser: true, useUnifiedTopology: true },

  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-repository-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-repository-${file.originalname}`,
    };
  },
});

// util.promisify() to make the exported middleware object can be used with async-await

var uploadFile = multer({ storage: storage }).single('file');
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;
