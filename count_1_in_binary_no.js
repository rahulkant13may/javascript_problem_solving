function bin(n){
    const arr = [];
    while(n>1){
      const bi = n%2;
      arr.push(bi);
      n = Math.floor(n/2)
    }
    arr.push(n)
    console.log(arr.reverse())
    var count = 0
    for(let i in arr){
      if(arr[i] == 1) count++
    }
    console.log(count)
  }
  
  bin(10)
  