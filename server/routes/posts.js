const express = require("express");
const Router = express.Router();
const uploadImageFields = require("../utils/multer");

const postController = require("../controller/postController");

//READ
Router.get("/", postController.index);
Router.get("/:id", postController.detail);

//CREATE
Router.post('/', uploadImageFields, postController.create);

// 보류겐 Router.post('/', uploadImage.single('image'), postController.create);

//DELETE
Router.delete("/:id", postController.delete);

//UPDATE
Router.put("/:id/edit", postController.edit);

// url 중복 검사
Router.post("/urlduplicate", postController.urlDuplicate);

// Active
Router.put("/:id/active", postController.active);

// Like
Router.put("/:id/like", postController.like);

module.exports = Router;
