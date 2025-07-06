let  h3 = document.querySelector("h3");
 
let id_h3 = h3.getAttribute("id");
console.log(id_h3); // we can  see the id of h3 element

h3.setAttribute("class","newClass");
console.log(h3.getAttribute("class")); // we can see the new class of h3 element

h3.style.backgroundColor = "black";
h3.style.borderColor = "yellow"// we can change the style of h3 element

h3.innerHTML = "This is a new text"; // we can change the innerHTML of h3 element

h3.style.fontSize = "30px";

let btn = document.createElement("button");
btn.innerHTML = "Submit";

let h3_new = document.querySelector("h3");

h3.append(btn);
// h3.prepend(btn);
// h3.after(btn);
// h3.before(btn);

btn.style.margin = "20px";
