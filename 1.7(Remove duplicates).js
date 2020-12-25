let arr = [1,2,2,8];

// Anonymous function as a parameter(inside filter)
let fiteredArr = arr.filter((val,index)=>{return arr.indexOf(val)==index});
console.log(fiteredArr);

// IIFE (Immediately Invoked Function Expression)
let filterArr = (()=>{
  let newArr = [];
  for (let i=0;i<arr.length;i++){
    let check = 0;
    for (let j=0;j<newArr.length;j++)
      if (arr[i] == newArr[j])
        check = 1;
    if (check == 0)
      newArr.push(arr[i]);
  }
  return newArr;
})();
console.log(filterArr);
