const express = require('express');
const Router = express.Router();

const surveyController = require('../controller/surveyController');



Router.get('/:id', surveyController.detail);
//CREATE
Router.post('/', surveyController.create);
//DELETE
Router.delete('/:id', surveyController.delete);

module.exports = Router