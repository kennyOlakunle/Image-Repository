const upload = require('../middleware/upload');

const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(
        `You must select at least 1 file. <br> <a href="/"<button>Back</button>`
      );
    }

    return res.send(
      `Files have been uploaded. <br> <a href="/"<button>Back</button>`
    );
  } catch (error) {
    console.log(error);

    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.send(
        `Too many files to upload. <br> <a href="/"<button>Back</button>`
      );
    }
    return res.send(
      `Error when trying upload many files: ${error} <br> <a href="/"<button>Back</button>`
    );
  }
};

module.exports = {
  uploadFiles: uploadFiles,
};
