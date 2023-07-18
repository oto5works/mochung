const Image = require('../models/Image')
const User = require('../models/User')
const { Storage } = require('@google-cloud/storage');
const sharp = require('sharp');
const fs = require('fs');



exports.detail = async (req, res) => {
  const ids = req.params.id.split(","); // Split comma-separated IDs into an array
  console.log(ids)

  try {
    const images = await Image.find({ _id: { $in: ids }, url: { $nin: ["`", null] } }); // Use $in operator to search for any matching IDs
    const urls = ids.map(id => images.find(img => img._id.toString() === id)?.url).filter(url => url != null);
    console.log(urls)
    res.send(urls);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
}
exports.getNull = async (req, res) => {
  console.log('getNull')
}

exports.getSingle = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id).exec();
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    const url = image.url; // extract the url property from the image object
    res.status(200).json( url );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getMultiple = async (req, res) => {
  const ids = req.params.id.split(","); // Split comma-separated IDs into an array
  console.log(ids)

  try {
    const images = await Image.find({ _id: { $in: ids }, url: { $nin: ["`", null] } }); // Use $in operator to search for any matching IDs
    const urls = ids.map(id => images.find(img => img._id.toString() === id)?.url).filter(url => url != null);
    console.log(urls)
    res.send(urls);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
}
/*
// CREATE
exports.create = (req, res) => {
  console.log ('파일노리리리', req)
  // Validate request
  if (!req.file) {
    return res.status(400).send({
      message: "Image file is required."
    });
  }

  // Create a new image object
  const image = new Image({
    url: req.file.linkUrl,
  });

  // Save the image to the database
  image.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Image."
      });
    });
};

*/














exports.get = (req, res) => {
  console.log('이미지 업로드 완료'); // logs the value of the req parameter
};




exports.update = (req, res, next) => {
  Image.findByIdAndUpdate(req.params.id,(err, image) => {
  
   res.status(200).json(image);
  });
};




exports.create = async (req, res) => {
  // Validate request
  if (!req.file) {
    return res.status(400).send({
      message: "Image file is required."
    });
  }
console.log ('cococococo', req.file)
  const image = new Image({
    url: req.file.linkUrl,
  });

// If req.file.mimetype.startsWith('image/')
  if (req.file.mimetype.startsWith('image/')) {  
  try {
    const storage = new Storage({
      projectId: 'eco-emissary-392608',
      keyFilename: process.env.GOOGLECLOUD_KEYFILE,
    });

    const bucketName = 'jwpg_bucket';
    const filename = req.file.filename;
    const file = storage.bucket(bucketName).file(filename);

    const tempLocalPath = `./download/${filename}`; 
    await file.download({ destination: tempLocalPath });

    const convertedImageBuffer = await sharp(tempLocalPath).toFormat('webp').toBuffer();


    const convertedFilename = `${filename}.webp`;
    const convertedFile = storage.bucket(bucketName).file(convertedFilename);

    await convertedFile.save(convertedImageBuffer, {
      resumable: false,
      metadata: {
        contentType: 'image/webp',
      },
    });
    image.url = `https://storage.googleapis.com/${bucketName}/${convertedFilename}`;
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Image."
    });
  }

}

  res.send(image);
};
