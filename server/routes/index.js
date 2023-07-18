const router = require('express').Router()
const userRouter = require('./users')
const postRouter = require('./posts')
const imageRouter = require('./image')
const loginRouter = require('./login')
const authRouter = require('./auth')

const notFound = require('../middlewares/notFound')
const errorHandler = require('../middlewares/errorHandler')

// Users
router.use('/api/users', userRouter)

// Posts
router.use('/api/posts', postRouter)

// Images
router.use('/api/images', imageRouter)

// Login
router.use('/api/login', loginRouter)

// Auth
router.use('/api/auth', authRouter)


// Route not found
router.use(notFound)

// Error handler
router.use(errorHandler)

module.exports = router