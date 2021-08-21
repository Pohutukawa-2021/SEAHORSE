const express = require('express')
const { assignGroups, assignGroupNames } = require('./random')
const path = require('path')
const db = require('./db/index')
const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {

    try {
        const people = await db.getPeople()
        const teams = await db.getTeams() 
        const groupedPeople = assignGroups(people)
        const team = teams.filter(elem => elem.themeId === Number(req.params.id))
        const finalTeams = assignGroupNames(team, groupedPeople)
// console.log(finalTeams);
        res.render('details', { teams: finalTeams })
    } catch (error) {
        console.error(error);
        res.status(500).send('bad error')
    }
})
