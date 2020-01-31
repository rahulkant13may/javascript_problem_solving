function addBinary(a,b) {
  var num = a+b;
  var bin = [];
  while(num>0){
    var bi = num%2;
    bin.push(bi);
    num = Math.floor(num/2)
  
  }
  //Join array values with no space
  console.log(bin)
  return bin.reverse().join("")

  //shortcut method
  //num.toString(base) can convert any number to the given base
  console.log((a+b).toString(2))
   
  }