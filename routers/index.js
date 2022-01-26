const express = require('express');
const router = new express.Router();

const emailVerifyRouter = require('./emailVerify')

router.use('/email', emailVerifyRouter)

module.exports = router;