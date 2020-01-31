function XO(str) {
    //code here
    var countX = 0;
    var countO = 0;
    for(let i in str){
      if(str[i].toLowerCase() =="x") countX++
      if(str[i].toLowerCase() =="o") countO++
    }
    console.log(countX, countO)
    if(countX == countO) return true
    else return false
}

XO("xxooOOOXX")