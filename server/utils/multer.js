const multer = require("multer");
const multerGoogleStorage = require("multer-cloud-storage");
const sharp = require("sharp");
const { PassThrough } = require("stream");
const { v4: uuidv4 } = require("uuid"); // UUID 패키지 추가

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

    let uploadedFileName;
    if (file.mimetype.startsWith("image/")) {
      uploadedFileName = `${file.fieldname}_${sanitizedOriginalname}.webp`; // UUID 사용
    } else {
      const extension = extensionMap[file.mimetype];
      uploadedFileName = `${file.fieldname}_${sanitizedOriginalname}${extension}`; // UUID 사용
    }
    callback(null, uploadedFileName);
  },
});

// Multer middleware 설정
const uploadImage = multer({
  storage: memoryStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10mb 제한
});

const processAndUploadImage = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next();
  }

  const processAndUpload = async (file) => {
    let buffer;
    let mimetype = file.mimetype;

    console.log(`파일 처리 시작: ${file.originalname}, MIME 타입: ${mimetype}`);

    // 이미지인 경우에만 WebP로 변환
    if (file.mimetype.startsWith("image/")) {
      buffer = await sharp(file.buffer).webp().toBuffer();
      mimetype = "image/webp";
      console.log(`이미지 변환 완료: ${file.originalname} -> WebP`);
    } else {
      buffer = file.buffer;
      console.log(`파일 변환 필요 없음: ${file.originalname}`);
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
      storageEngine._handleFile(req, storageFile, async (error) => {
        if (error) {
          console.error(`파일 업로드 오류: ${error}`);
          reject(error);
        } else {
          // 실제로 저장된 파일 이름을 사용
          const uploadedFileName = storageFile.fieldname + "_" + encodeURIComponent(storageFile.originalname.replace(/\s/g, "")) + (mimetype.startsWith("image/") ? ".webp" : extensionMap[mimetype]);

          // URL 생성 시 실제 파일 이름을 사용
          const fileURL = `https://storage.googleapis.com/jwpg_bucket/${uploadedFileName}`;

          // Log the uploaded file information for debugging purposes
          console.log("스토리지 업로드 완료 파일 url:", fileURL);
          
          // 파일 정보 저장
          file.filename = uploadedFileName;
          file.url = fileURL;
          
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
    console.log("모든 파일 업로드 완료");
    next();
  } catch (error) {
    console.error(`업로드 중 오류 발생: ${error}`);
    next(error);
  }
};

// Specify the fields and their configurations
const fieldsConfig = [
  { name: "homeFile", maxCount: 1 },
  { name: "audioFile", maxCount: 1 },
  { name: "locationFile", maxCount: 1 },
  { name: "galleryFiles", maxCount: 20 },
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
