var http=require("http");
var fs=require('fs');
var path=require('path');
var mime={
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.jpg':'image/jpeg',
    '.png':'image/png'
}
var server=http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=='/'){
        req.url="/index.html"
    }
    if(fs.existsSync('.'+req.url)){
        res.writeHead(200,{'Content-type':mime[path.extname(req.url)]||'application/octet-stream'});
        fs.readFile('.'+req.url,function(err,data){
            res.write(data);
            res.end();
        })

    }else{
        res.writeHeader(404);
        res.end();
    }



})

server.listen(8000);