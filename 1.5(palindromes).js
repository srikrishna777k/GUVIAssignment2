let arr = ["Nan","tenet","hooh","cheese"];

// Anonymous function passed as parameter(inside filter)
let palArray = arr.filter((val)=>{
  if (val.toLowerCase() == val.split("").reverse().join("").toLowerCase())
    return true;
  else
    return false;  
});
console.log(palArray);


// IIFE (Immediately Invoked Function Expression)
let palindromes = (function(){
  let palArr = [];
  for (let i=0;i<arr.length;i++){
    if (arr[i].toLowerCase() == arr[i].split("").reverse().join("").toLowerCase())
      palArr.push(arr[i]);
  }
  return palArr;
})();
console.log(palindromes);

