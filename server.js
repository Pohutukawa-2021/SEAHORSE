const express = require('express')
const hbs = require('express-handlebars')
const { getTeamsData } = require('./random.js')
const path=require('path')
const fs=require('fs')
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
    const template='home'
    const filepath=path.join(__dirname,'data.json')
    fs.readFile(filepath,'utf8',(err,themeObj)=>{

        if(err){
            console.error(err.message)
        }
        else{
            const parsedThemeObj=JSON.parse(themeObj)
             const viewData={themes:parsedThemeObj.Themes}
             console.log(viewData)
             res.render(template,viewData)
        }
    })
})
