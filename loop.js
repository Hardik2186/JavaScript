//for of loop
let Name="Charusat University";

for(let val of Name){
    console.log("String Character : ",val);
}//for of loop use for arrays and strings to iterate over each character or element.

//for in loop
const Student = {
    Name: "Hardik Hadiya",
    age: 19,
    CGPA: 8.9,
    IsPassed: true
}

for(let key in Student){
    console.log("Key:",key,"Value of Key: ",Student[key]);
}