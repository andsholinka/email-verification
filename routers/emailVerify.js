const express = require('express');
const emailVerifyController = require('../controllers/emailVerify');

const router = express.Router();

router.get('/:email', emailVerifyController.emailVerify);

module.exports = router;