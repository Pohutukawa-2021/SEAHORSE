module.exports = {assignGroups}


function assignGroups(peoplesNamesArray){
  const teams = [[],[],[],[]]// push peoples names into array
  const length = peoplesNamesArray.length
  const remainder = length %4
  for(let i= 0; i<length; i++){
    let num = Math.floor(Math.random() * teams.length);

    //console.log(num);

    if(teams[num].length !== 4){
      if(teams[num].length ===5){
        let newNum = Math.floor(Math.random() * teams.length);
        while (newNum === num){
          newNum = Math.floor(Math.random() * teams.length)
        } 
        if(newNum !== num){
          teams[newNum].push(peoplesNamesArray[i])
        }
      }
      else{
        teams[num].push(peoplesNamesArray[i])
      }
    }
    else{
      if(i>= length - remainder){

      teams[num].push(peoplesNamesArray[i])
      }
      else{
      teams.forEach(el => {
         if(el.length !==4){
            el.push(peoplesNamesArray[i])
            return
        }
      })
    }
      
    }
  }

  return teams
}

 function assignGroupNames(jsonTeam, teamsArray){// jsonTeam is "teams" key 
   const returnObj = []
   
   for(let i = 0; i<teamsArray.length ;i++){
     returnObj[i] = {}
     returnObj[i].teamName = jsonTeam[i].name
     returnObj[i].image = jsonTeam[i].image
     returnObj[i].names = teamsArray[i]

    }
    return returnObj

 }

const team = [
{"name": "Ali",
"image":""},

{"name": "Austin",
 "image":""},

{"name": "Prabhnoor",
 "image":""},

{"name": "Kieran",
 "image":""},
 {"name": "a",
 "image":""},
 {"name": "b",
"image":""},

{"name": "c",
 "image":""},

{"name": "d",
 "image":""},

{"name": "e",
 "image":""},
 {"name": "f",
 "image":""},
 {"name": "g",
 "image":""},

{"name": "h",
 "image":""},
 {"name": "i",
 "image":""},
 {"name": "j",
"image":""},

{"name": "q",
 "image":""},

{"name": "l",
 "image":""},

{"name": "m",
 "image":""},
 {"name": "n",
 "image":""},
]
let teams = [{"name": "Rats",
"image":""},

{"name": "SeaLions",
 "image":""},

{"name": "Whales",
 "image":""},

{"name": "Bats",
 "image":""}
]

let teamsArray = assignGroups(team)
console.log(assignGroupNames(teams,teamsArray));
