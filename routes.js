const express = require('express')
const { assignGroups, assignGroupNames } = require('./random')
const path = require('path')
const fs = require('fs')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
    const template = 'details'
    const filepath=path.join(__dirname,'data.json')
    fs.readFile(filepath,'utf8',(err,data)=>{
            if(err){
            console.error(err.message)
        }
        else {
            const parsedPeopleName=JSON.parse(data)
            const viewData={
                teams: "lol"

            }
           
            const teamNames = assignGroups(parsedPeopleName.peopleNames)
            const foundTeam = parsedPeopleName.Themes.find(elem => elem.id === Number(req.params.id))

            const finalTeams = assignGroupNames(foundTeam.team, teamNames)
            viewData.teams = finalTeams             //final teams means that everythinig is done!! (final, duh!)

             res.render(template, viewData)     // template is 'details'
        }
    })})
