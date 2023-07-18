const express = require('express');
const router = express.Router();
const passport = require('passport')
const authController = require('../controller/authController');

const authMiddleware = require('../middlewares/auth')


router.post('/login',authController.login)
router.post('/register',authController.register)


router.use('/check', authMiddleware)
router.get('/check', authController.check)




/* social login */

// naver
router.get('/naver', authController.naver)
router.get('/naver/callback', authController.naver_callback)
router.post('/naver/me', authController.naver_me)
router.post('/naver/register', authController.naver_register)





module.exports = router;



