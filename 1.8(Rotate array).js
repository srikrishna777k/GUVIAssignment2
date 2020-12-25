let arr = [1,2,2,8,6];
let k = 2;

// Anonymous function as a parameter(inside map)
let rotatedArr = arr.map((val,ind)=>{
  if (ind-k < 0)
    return arr[arr.length+ind-k];
  else
    return arr[ind-k];
});
console.log(rotatedArr);

// IIFE (Immediately Invoked Function Expression)
let rotArr = (()=>{
  let copyArr = JSON.parse(JSON.stringify(arr));      //copy by value
  for (let i=0;i<k;i++)
    copyArr.unshift(copyArr.pop());
  return copyArr;
})();
console.log(rotArr);
