let a = document.getElementById("id");
console.dir(a);

let b = document.getElementsByClassName("dom");
console.dir( b);

let c = document.getElementsByTagName("div");
console.dir(c);

let d = document.querySelector(".dom");//it only select the first element

let e = document.querySelectorAll(".dom");//it select all elements

console.log(document.body.tagName);

console.log(document.body.innerText);

console.log(document.body.innerHTML);

console.log(document.body.textContent);
