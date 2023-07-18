const express = require('express');
const Router = express.Router();
const uploadImage = require('../utils/multer');

const postController = require('../controller/postController');


//READ
Router.get('/', postController.index);
Router.get('/:id', postController.detail);

//CREATE
Router.post('/', uploadImage.single('image'), postController.create);

//EDIT
Router.get('/:id/edit', postController.edit);

//UPDATE
Router.put('/:id/edit', postController.update);

// url 중복 검사
Router.post('/urlduplicate', postController.urlDuplicate);

//DELETE
Router.delete('/:id', postController.delete);

//COMMENT
Router.put('/:id/comments', postController.commentAdd);
//DELETE
Router.delete('/comments/:id', postController.commentDelete);


module.exports = Router