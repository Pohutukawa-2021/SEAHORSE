const express = require('express')
const { assignGroups } = require('./random')

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
             const viewData={themes:parsedPeopleName.peopleNames}
             console.log(viewData)
             res.render(template, viewData)
        }
    })})
