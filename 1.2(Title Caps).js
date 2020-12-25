let strarr = "I am known for that";
let arr = strarr.split(" ");

// Anonymous function as a parameter(inside map)
let capsArr = arr.map((val)=>{
  let char0 = val[0].toUpperCase();
  return char0 + val.slice(1).toLowerCase();
})
console.log(capsArr.join(" "));

// IIFE (Immediately Invoked Function Expression)
let capArr = (()=>{
  let newArr = [];
  for (let i=0;i<arr.length;i++){
    let str = arr[i].toLowerCase();
    newArr.push(str.replace(str[0],str[0].toUpperCase()));
  }
  return newArr;
})()
console.log(capArr.join(" "));