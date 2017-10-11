var express=require('express');
var app=express();
var fs=require('fs');

//只有某一个（list）请求会执行
app.use("/list",function(req,res,next){
    var t= new Date().toLocaleTimeString();
    fs.appendFile("times2.txt",t+"\n",function(err){
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