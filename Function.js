//function without parameters
function function1(){
    console.log("this is my function1");
}
function1();

//function with parameters
function function2(a,b){
    console.log("this is the sum of a and b: ",a+b);
}
function2(5,10);

//fuction with return value
function function3(a,b){
    return a+b;
}

let value = function3(1,2);
console.log("this is the addition of a and b: ",value);

//Arrow function
const function4 = (a,b) => {
    return a+b;
}

//higher order function or callback function
let arr = [1,2,3,4,5];
arr.forEach((value) => {
    console.log(value);
})