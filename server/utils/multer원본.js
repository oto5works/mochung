/* multer.js */
const multer = require('multer');
const multerGoogleStorage = require('multer-cloud-storage');

const extensionMap = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/bmp': '.bmp',
  'image/svg': '.svg',
  'image/webp': '.webp',
  'video/mp4': '.mp4',
  'audio/wav': '.wav',
  'audio/mp3': '.mp3',
  'audio/mpeg': '.mp3',
};
// Multer 임시 스토리지
const storage = multer.memoryStorage()

// 구글 클라우드 스토리지
const storageEngine = multerGoogleStorage.storageEngine({
  bucket: 'jwpg_bucket',
  projectId: 'eco-emissary-392608',
  keyFilename: process.env.GOOGLECLOUD_KEYFILE,
  filename: (req, file, callback) => {
    console.log('kokokoko', file)
    if (file.mimetype.startsWith('image/')) {
      callback(null, `${file.originalname}_${Date.now()}`);
    } else {
      let extension = extensionMap[file.mimetype];
      callback(null, `${file.originalname}_${Date.now()}` + extension);
    }
  },
});

const uploadImage = multer({
  storage: storageEngine,
  limits: { fileSize: 5 * 1024 * 1024 },
})

module.exports = uploadImage;
