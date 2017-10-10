var http=require('http');
var fs=require('fs');
var qs=require('querystring');
var url=require('url');
var data=["123","456","789","111","123"];
http.createServer(function(req,res){
    var u=url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/"||u.pathname=="index.html"){
        fs.readFile("./index.html",function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/search"){
        var q=qs.parse(u.query);
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var result=data.filter(function(v,i){
            if(v==q.s){
                return true;
            }
            return false;
        })
        res.end(result.toString());
    }

}).listen(8000);