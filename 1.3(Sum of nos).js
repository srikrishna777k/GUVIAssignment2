var arr = [1,2,3,4];

// Anonymous function passed as parameter(inside reduce)
var sum = arr.reduce((tot,val)=>{return tot+val});
console.log(sum);

// IIFE (Immediately Invoked Function Expression)
var add = (()=>{
  let sumup = 0;
  for (let i=0;i<arr.length;i++)
    sumup += arr[i];
  return sumup;
})();
console.log(add);