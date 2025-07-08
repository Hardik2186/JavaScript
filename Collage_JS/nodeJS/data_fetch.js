var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{
    //read file
    fs.readFile("index.html",'utf-8',function(err,data){
        console.log(data)
        res.end(data)
    })
}).listen(5000)

console.log("Server run in http://localhost:5000/")
