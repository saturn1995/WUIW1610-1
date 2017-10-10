var express=require('express');
var app=express();

app.get("/",function(req,res){
    res.send('首页');
})
app.get("/list",function(req,res){
    res.send('列表页');
})
app.get("/show",function(req,res){
    res.send('详情页');
})
var server=app.listen(3000,'localhost',function(){
    console.log("express已经启动");
    console.log("当前项目的地址是：http://%s:%s",server.address().address,server.address().port);
});