const express = require('express');
const Router = express.Router();
const authMiddleware = require('../middlewares/auth')

const userController = require('../controller/userController');


Router.route('/me')
  .all(authMiddleware)
  .get(userController.me);


module.exports = Router



