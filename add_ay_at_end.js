function pigIt(str){
    //Code here
    var strArray = str.split(" ")
    var ayArray = []
    for(let i in strArray){
      var empArray = []
      for(let j in strArray[i]){
        if(j != 0){
          empArray.push(strArray[i][j])
        }
        // console.log(strArray[i][j])
      }
      empArray.push(strArray[i][0])
      strArray[i][0] != "?" && strArray[i][0] != "!" ? empArray.push("ay") : ""
      ayArray.push(empArray.join(""))
      // console.log(ayArray)
    }
    console.log(ayArray.join(" "))
    return ayArray.join(" ") 
  }
  
//   function pigIt(str) {
//     return str.replace(/\w+/g, w => {
        //  all are same
//       console.log(w.slice(1) + w[0] + 'ay')
//       console.log(w.substr(1) + w[0] + 'ay')
//       console.log(w.substring(1) + w[0] + 'ay')
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }

  
  pigIt( "Quis custodiet ipsos custodess ?")