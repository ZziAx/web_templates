import multer from "multer";
import fs from "fs";
const uploadFolder = "uploads";


// Configure multer storage
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, uploadFolder); // folder to save files
  },
  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});

const imageFilter = (req:any, file:any, cb:any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// const upload = multer({ storage, });
const uploadProduct = multer({ storage: storage, fileFilter: imageFilter }); // 'images' is the field name for files

const uploadPage = multer({ storage: storage }); // 'images' is the field name for files

export {uploadProduct,uploadFolder,uploadPage}