//variable declaration
Name="Hardik Hadiya";
age=19;
date="28-06-2025";
console.log(Name);//to print data in console


//variable declaration with their  data types

//we have three variable let,var,const

var name="Hardik Hadiya";
var name="Hadiya Hardik";//In var we can redeclare variable and also update the value of variable..

let name1="Hardik Hadiya";//In let we can not redeclare variable but we can update the value of variable.

name1="Hadiya Hardik";//we can update the value of variable in let.

const PI=3.14;//This value con't be changed or replaced.

//Object in Javascript
const Student={
    Name: "Hardik Hadiya",
    age: 19,
    CGPA: 9,
    Department: "CSE"
}

//we can call the object by 2 ways
console.log(Student.Name);
console.log(Student["age"]);

//conditional statements
if (age > 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//user input using prompt
let userName = prompt("Enter your name:");