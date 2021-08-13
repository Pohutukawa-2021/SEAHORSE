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
