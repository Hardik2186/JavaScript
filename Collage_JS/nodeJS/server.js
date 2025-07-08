var http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/HTML'})
    res.write("Hello ,")
    res.write("<b>My self Hardik Hadiya </b>")
    res.end()
}).listen(3000);

console.log("Server run in http://localhost:3000/")