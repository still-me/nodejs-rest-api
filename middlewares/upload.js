const multer = require("multer");
const path = require("path");
const { BadRequest } = require("http-errors");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
  limits: {
    fileSize: 2000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image")) {
      cb(null, true);
      return;
    }
    const error = new BadRequest("The format of avatars file is wrong");
    cb(error);
  },
});

module.exports = upload;
