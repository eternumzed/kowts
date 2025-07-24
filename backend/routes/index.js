const express = require('express')
const router = express.Router()

const quote_controller = require('../controllers/quoteController')

router.get('/', quote_controller.index)

module.exports = router

