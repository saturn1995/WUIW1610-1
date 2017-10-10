var http=require("http");

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    // res.setHeader('Content-type','text/plain');
    res.write("<h1>你好</h1>");
    res.end();

})
server.listen(8000);