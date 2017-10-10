var express=require('express');
var app=express();

app.get("/",function(req,res){
    res.send('get 格式');
})
app.post("/",function(req,res){
    res.send('post 格式');
})
app.put("/",function(req,res){
    res.send('put 格式');
})
app.delete("/",function(req,res){
    res.send('delete 格式');
})
var server=app.listen(3000,'localhost',function(){
    console.log("express已经启动");
    console.log("当前项目的地址是：http://%s:%s",server.address().address,server.address().port);
});
