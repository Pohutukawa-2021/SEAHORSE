const express = require('express')
const router = express.Router()

module.exports = router

router.get('/select', (req, res) => {
  res.render('select')
})
