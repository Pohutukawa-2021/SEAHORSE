module.exports(addName)
const path = require('path')
const fs = require('fs')

function addName(name,img){
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('err')
    }
    try {
      const newData = JSON.parse(data)
      const addedName = { ...newData }
      const newPerson = {}
      newPerson.name = name
      newPerson.image = img

      addedName["peopleName"].push(newPerson)
      const updateFile = JSON.stringify(addedName,null,2)

      fs.writeFile(filePath,updateFile,(err)=>{
        if(err){
          console.log("you have an error");
         return
        }
      })
    }
    catch(err){
      console.log("you are not sick"); // redirect after this
  }
})
}
//on route
router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('err')
    }
    try {
      const newData = JSON.parse(data)
      const vd = newData.puppies.find(el => id === el.id)
      // console.log(vd);
      res.render('edit', vd)// take it to the page that has the edit html
    } catch (parseError) {
      console.log('parseError')
    }
  })
})
router.post('/:id/edit', (req, res) => {
  // const id = Number(req.params.id)
  // const body = { ...req.body }
  //let updatedPups = {}

  const filePath = path.join(__dirname, 'data.json')

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('err')
    }
    try {
      // console.log(data)
        addName(req.body.Name,req.body.Image)// changes the json file and adds a person object with name and image in peopleNames
        res.redirect('/')
      
    } catch (parseError) {
      console.log('parseError')
    }
  })
})
