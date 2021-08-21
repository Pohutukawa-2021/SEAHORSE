const express = require('express')
const hbs = require('express-handlebars')
const db = require('./db/index')
const teams = require('./routes/teams')
const admin = require('./routes/admin')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/teams', teams)
server.use('/admin', admin)

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// export
module.exports = server

// Server routes/router(s)
server.get('/', async (req, res) => {
  try {
    const themes = await db.getThemes()
    const viewData = { themes }
    res.render('home', viewData)
  } catch (error) {
    console.error(error)
    res.status(500).send('bad error')
  }
})
