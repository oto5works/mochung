const express = require('express');
const Router = express.Router();
const uploadImage = require('../utils/multer');

const commentController = require('../controller/commentController');



Router.get('/:id', commentController.detail);
//CREATE
Router.post('/', commentController.create);
//DELETE
Router.delete('/:id', commentController.delete);

module.exports = Router