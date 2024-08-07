const multer = require("multer");
const multerGoogleStorage = require("multer-cloud-storage");
const sharp = require("sharp");
const { PassThrough } = require("stream");

const extensionMap = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/bmp": ".bmp",
  "image/svg": ".svg",
  "video/mp4": ".mp4",
  "audio/wav": ".wav",
  "audio/mp3": ".mp3",
  "audio/mpeg": ".mp3",
};

// Multer 임시 스토리지
const memoryStorage = multer.memoryStorage();
// 파일이름
let uploadedFileName;

// 구글 클라우드 스토리지
const storageEngine = multerGoogleStorage.storageEngine({
  bucket: "jwpg_bucket",
  projectId: "eco-emissary-392608",
  keyFilename: process.env.GOOGLECLOUD_KEYFILE,
  filename: (req, file, callback) => {
    // 파일 이름에서 공백을 제거하고 인코딩
    const sanitizedOriginalname = encodeURIComponent(
      file.originalname.replace(/\s/g, "")
    );

    if (file.mimetype.startsWith("image/")) {
      uploadedFileName =
        `${file.fieldname}_${sanitizedOriginalname}_${Date.now()}` + ".webp";
      callback(null, uploadedFileName);
    } else {
      let extension = extensionMap[file.mimetype];
      uploadedFileName =
        `${file.fieldname}_${sanitizedOriginalname}_${Date.now()}` + extension;
      callback(null, uploadedFileName);
    }
  },
});

// Multer middleware 설정
const uploadImage = multer({
  storage: memoryStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

const processAndUploadImage = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next();
  }

  const processAndUpload = async (file) => {
    let buffer;
    let mimetype = file.mimetype;

    // 이미지인 경우에만 WebP로 변환
    if (file.mimetype.startsWith("image/")) {
      buffer = await sharp(file.buffer).webp().toBuffer();
      mimetype = "image/webp";
    } else {
      buffer = file.buffer;
    }

    const stream = new PassThrough();
    stream.end(buffer);

    const storageFile = {
      stream: stream,
      mimetype: mimetype,
      originalname: file.originalname,
      fieldname: file.fieldname,
    };

    return new Promise((resolve, reject) => {
      storageEngine._handleFile(req, storageFile, (error) => {
        if (error) {
          reject(error);
        } else {
          const fileURL = `https://storage.googleapis.com/jwpg_bucket/${uploadedFileName}`;
          file.filename = uploadedFileName;
          file.url = fileURL;
          // Log the uploaded file information for debugging purposes
          console.log("스토리지 업로드 완료 파일 url:", file.url);

          resolve();
        }
      });
    });
  };

  const files = req.files;
  const promises = [];

  for (const fieldName in files) {
    const fileList = files[fieldName];
    promises.push(fileList.map(processAndUpload));
  }

  try {
    await Promise.all(promises.flat());
    next();
  } catch (error) {
    next(error);
  }
};

// Specify the fields and their configurations
const fieldsConfig = [
  { name: "homeFile", maxCount: 1 },
  { name: "audioFile", maxCount: 1 },
  { name: "locationFile", maxCount: 1 },
  { name: "galleryFiles", maxCount: 10 },
  { name: "bankFiles0", maxCount: 10 },
  { name: "bankFiles1", maxCount: 10 },
  { name: "kakaotalkFile", maxCount: 1 },
];

// Convert the multer instance to use fields
const uploadImageFields = [
  uploadImage.fields(fieldsConfig),
  processAndUploadImage,
];

module.exports = uploadImageFields;
