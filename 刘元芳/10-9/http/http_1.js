var http=require("http");
/*
* http服务基于请求/响应模型
*/
//创建服务器
var server=http.createServer(function(req,res){
    //req:request 请求
    //res:response 响应
    res.end('你好');
})
//启动服务器并且监听8000这个端口
server.listen(8000,function(){
    console.log('服务器正在运行中...');
});

// server.listen(8000,'localhost',function(){
//     console.log('服务器正在运行中...,访问地址为:http://'+server.address().address+':'+server.address().port);
// });