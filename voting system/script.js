let maths=document.getElementById("m");
let python=document.getElementById("py");
let javascript=document.getElementById("js");

var mathsVotes=0;
var pythonVotes=0;
var javascriptVotes=0;

function vote(subject) {
    if (subject === "maths") {
        mathsVotes++;
        maths.innerHTML = "Maths: " + mathsVotes;
    } else if (subject === "python") {
        pythonVotes++;
        python.innerHTML = "Python: " + pythonVotes;
    } else if (subject === "javascript") {
        javascriptVotes++;
        javascript.innerHTML = "JavaScript: " + javascriptVotes;
    }
}