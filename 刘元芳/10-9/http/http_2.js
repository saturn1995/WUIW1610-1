var http=require("http");

var server=http.createServer(function(req,res){
    res.write('qwe'); //发送请求
    res.end(); //响应完成
    console.log(res);
})

server.listen(8000,'localhost',function(){
    console.log('服务器正在运行中...,访问地址为:http://'+server.address().address+':'+server.address().port);
});