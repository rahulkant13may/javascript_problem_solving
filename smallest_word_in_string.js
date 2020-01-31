function findShort(s){
    var MAX_NO = Number.MAX_SAFE_INTEGER
    var word = ''
    var sArray = s.split(" ")
    console.log(s.split(" "))
    for(let i in sArray){
      if(sArray[i].length < MAX_NO){
         MAX_NO = sArray[i].length
          word = sArray[i]
      }
    } 
    console.log(MAX_NO, word)
  }
  
//   function findShort2(s){
//     return Math.min(...s.split(" ").map(word => word.length))
//   }

  findShort("bitcoin take over the world maybe who knows peraps")