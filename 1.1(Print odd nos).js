var arr = [1,2,3,4];

// Anonymous function passed as parameter(inside forEach)
arr.forEach((val)=>{
  if (val%2 != 0)
    console.log(val);
});    

// IIFE (Immediately Invoked Function Expression)
(function (){
  for (let i=0;i<arr.length;i++)
    if (arr[i]%2 != 0)
      console.log(arr[i]);
})();

