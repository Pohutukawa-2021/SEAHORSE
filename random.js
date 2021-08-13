module.exports = {assignGroups, assignGroupNames}


function assignGroups(peoplesNamesArray){
  //console.log(peoplesNamesArray);
  const teams = [[],[],[],[]]// push peoples names into array
  const length = peoplesNamesArray.length
  const remainder = length %4
  for(let i= 0; i<length; i++){
    let num = Math.floor(Math.random() * teams.length); 
       if(teams[num].length < 4){
        teams[num].push(peoplesNamesArray[i])    }
    else {
      if(i>= length - remainder){   
        if(teams[num].length !== 5){
          teams[num].push(peoplesNamesArray[i])
        } 
        else {
          let newNum = Math.floor(Math.random() * teams.length);
          while (newNum === num){
            newNum = Math.floor(Math.random() * teams.length);
          }
          if(teams[newNum].length !== 5){
            teams[newNum].push(peoplesNamesArray[i])
          }
        }
      }
      else{
        for(let j = 0; j<teams.length;j++){
          let element = teams[j]
          if(element.length<4){
            element.push(peoplesNamesArray[i])
            break
          }        }  }
}
} return teams // last two will always be in bigger groups 
//

//HAVE AN ARRAY THAT HAS RANDOMLY PLACED INDEXES AND GO THROUGH IT NORMALLY AND RUN THE SAME CODE
 
}

function assignGroupNames(jsonTeam, teamsArray){// jsonTeam is "team" key 
   const returnObj = []
   
   for(let i = 0; i<teamsArray.length ;i++){
     returnObj[i] = {}
     returnObj[i].teamName = jsonTeam[i].teamName
     returnObj[i].image = jsonTeam[i].image
     returnObj[i].names = teamsArray[i]

    }
    return returnObj

}


 const teamNames = [
  {
    "name": "Ali",
    "image": "https://ca.slack-edge.com/T02SQPVAC-U023P86PY3B-976e2618adec-192"
  },
  {
    "name": "Austin",
    "image": "https://avatars.githubusercontent.com/u/85047232?v=4"
  },
  {
    "name": "Kieran",
    "image": "https://avatars.githubusercontent.com/u/72641947?v=4"
  },
  {
    "name": "Jessie",
    "image": "https://avatars.githubusercontent.com/u/58745625?v=4"
  },
  {
    "name": "Prabhnoor",
    "image": "https://ca.slack-edge.com/T02SQPVAC-U02548MA8BG-6727d8a9b7de-512"
  },
  {
    "name": "JV",
    "image": "https://avatars.githubusercontent.com/u/83190123?v=4"
  },
  {
    "name": "Alan",
    "image": "https://avatars.githubusercontent.com/u/85937572?v=4"
  },
  {
    "name": "Louis",
    "image": "https://avatars.githubusercontent.com/u/62978181?v=4"
  },
  {
    "name": "Cris",
    "image": "https://avatars.githubusercontent.com/u/80133173?v=4"
  },
  {
    "name": "Csiyang",
    "image": "https://avatars.githubusercontent.com/u/67619008?v=4"
  },
  {
    "name": "James",
    "image": "https://avatars.githubusercontent.com/u/80490743?v=4"
  },
  {
    "name": "Alex",
    "image": "https://avatars.githubusercontent.com/u/85384120?v=4"
  },
  {
    "name": "Dianne",
    "image": "https://avatars.githubusercontent.com/u/85599717?v=4"
  },
  {
    "name": "Dave",
    "image": "https://www.gannett-cdn.com/presto/2021/01/14/USAT/dc53a309-036c-4be5-ad1a-5848fc169a46-PRESIDENT_DONALD_TRUMP.jpg?crop=3482,2131,x241,y108"
  },
  {
    "name": "Sophia",
    "image": "https://avatars.githubusercontent.com/u/85972272?v=4"
  },
  {
    "name": "Tadhg",
    "image": "https://avatars.githubusercontent.com/u/83738717?v=4"
  },
  {
    "name": "Zahira",
    "image": "https://avatars.githubusercontent.com/u/86027651?v=4"
  },
  {
    "name": "Caleb",
    "image": "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc2MzAyNDY4NjM0NzgwODQ1/joe-biden-gettyimages-1267438366.jpg"
  }
]

// console.log(assignGroups(teamNames)