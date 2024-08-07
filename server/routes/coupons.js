const express = require('express');
const Router = express.Router();
const couponController = require('../controller/couponController');

//READ
Router.get('/', couponController.detail);
Router.get('/:id', couponController.detail);

//CREATE
Router.post('/', couponController.create);

//DELETE
Router.delete('/:id', couponController.delete);

//UPDATE
Router.put('/:id/edit', couponController.edit);

module.exports = Router

