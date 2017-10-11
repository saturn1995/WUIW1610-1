var express=require('express');
var app=express();
var fs=require('fs');

//任何一个请求都会执行
app.use(function(req,res,next){
    var t= new Date().toLocaleTimeString();
    fs.appendFile("times1.txt",t+"\n",function(err){
        if(err) throw err;
    })
    next();
})

app.get("/",function(req,res){
    res.send("首页");
})
app.get("/list",function(req,res){
        res.send('列表页');
    })


app.listen(4000);