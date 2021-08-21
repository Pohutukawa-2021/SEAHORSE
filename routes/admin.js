const express = require('express')
const router = express.Router()
const db = require('../db/index')
module.exports = router

// GET /admin/select
router.get('/select', async (req, res) => {
  try {
    const people = await db.getPeople()
    const themes = await db.getThemes()
    const viewData = {
      people,
      themes
    }
    res.render('select', viewData)
  } catch (error) {
    console.error(error)
    res.status(500).send('bad error')
  }
})

// GET /admin/add/theme
router.get('/theme/add', (req, res) => {
  res.render('addTheme')
})

// POST /admin/theme/add
router.post('/theme/add', (req, res) => {
  res.redirect('/admin/select')
})
