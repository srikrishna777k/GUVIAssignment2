let arr = [1,2,3,4];

// Anonymous function passed as parameter(inside filter)
let primeArr = arr.filter((val)=>{
  for (let i=2;i<=Math.floor(Math.sqrt(val));i++)
    if (val%i==0)
      return false;
    return val>=2;
});
console.log(primeArr);

// IIFE (Immediately Invoked Function Expression)
let finalPrime = (()=>{
  let prime = [];
  for (let i=0;i<arr.length;i++){
    let check = 0;
    for (let j=2;j<=Math.floor(Math.sqrt(arr[i]));j++)
      if (arr[i]%j==0 && arr[i]!=2){
        check = 1;
        break;}
    if (check == 0 && arr[i]!=1)
      prime.push(arr[i]);
  }
  return prime;
})();
console.log(finalPrime);