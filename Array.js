//create Array
let arr = [1,2,3,4,5];
console.log("Array: ",arr);

//push method
arr.push(6);
console.log("Array after push: ",arr);//if we want to add element at the start then we can also use unshift() method.

//pop method
arr.pop();
console.log("Array after pop: ",arr);//if we want to delete element at the start then we can also use shift() method.

//to convert array into string
let str = arr.toString();
console.log("Array to String: ",str);

//splice() method
let arr2=[1,2,3,4,5,6,7];

console.log("Array after splice: ",arr2.splice(2,3,20,30,40))