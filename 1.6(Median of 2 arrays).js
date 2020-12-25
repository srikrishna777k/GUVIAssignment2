let arr1 = [1,2,6,8];
let arr2 = [3,4,7,10];
let masterArr = arr1.concat(arr2).sort((a,b)=>{return a-b});
console.log(masterArr);

// Anonymous function assigned to variable
let median = ()=>{
  if (masterArr.length%2 != 0)                              //if array length is odd
    return masterArr[parseInt(masterArr.length/2)];
  else                                                      //if array length is even(this condition is enough as both arrays are assumed same length)
    return (masterArr[masterArr.length/2] + masterArr[masterArr.length/2 - 1])/2;
};
console.log(median());

// IIFE (Immediately Invoked Function Expression)
let med = (()=>{
  if (masterArr.length%2 != 0)                              //if array length is odd
    return masterArr[parseInt(masterArr.length/2)];
  else                                                      //if array length is even(this condition is enough as both arrays are assumed same length)
    return (masterArr[masterArr.length/2] + masterArr[masterArr.length/2 - 1])/2;
})();
console.log(med);