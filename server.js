const express = require('express')
const hbs = require('express-handlebars')
const { getTeamsData } = require('./utils')
const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/team-selector', routes)

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// export
module.exports = server

// Server routes/router(s)
server.get('/', (req, res) => {
    // getTeamsData(getDataAsObject => {
    //     const viewData = {
    //         themes: getDataAsObject
    //     }
    // })
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('err')
    }
    try {
      const newData = JSON.parse(data)
      console.log(newData)

      res.render('home', newData)
    } catch (parseError) {
      console.log('hey cmon man bad file')
    }
  })
})
