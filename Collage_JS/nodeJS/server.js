var http = require("http")

let a =10
let b = 20
let c = a + b
let msg=''
if(c==30){
    msg = "C value is 30"
} else {
    msg = "C value is not 30"
}

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/HTML'})
    res.write('<h1 style="color: red">Hello ,</h1>')
    res.write(`<br/>A value is ${a} <br/>B value is ${b} <br/>sum is ${a+b} <br/>`)
    res.write(msg)
    res.end()
}).listen(3000);

console.log("Server run in http://localhost:3000/")