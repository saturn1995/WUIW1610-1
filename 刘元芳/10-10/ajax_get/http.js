var http=require('http');
var fs=require('fs');
var qs=require('querystring');
var url=require('url');
var data=["123","456","789","111","123"];
http.createServer(function(req,res){
    var uu=url.parse(req.url);
    if(uu.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(uu.pathname=="/"||uu.pathname=="index.html"){
        fs.readFile("./index.html",function(err,data){
                res.write(data);
                res.end();
        })
        return;
    }
    if(uu.pathname=="/search"){
        var q=qs.parse(uu.query);
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var d=data.filter(function(v){
            if(v==q.s){
                return true;
            }
            return false;
        })
        res.write(JSON.stringify(d));
        res.end();
    }

}).listen(8000);