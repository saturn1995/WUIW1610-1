var express=require('express');
var app=express();

//中间件的使用
app.use(function(req,res,next){
    req.money=10000;
    console.log("一级");
    next();
})
app.use(function(req,res,next){
    req.money=req.money-4000;
    console.log("二级");
    next();
})
app.use(function(req,res,next){
    req.money=req.money-2000;
    console.log("三级");
    next();
})
app.use(function(req,res,next){
    req.money=req.money-2000;
    console.log("四级");
    next();
})
app.use(function(req,res,next){
    req.money=req.money-1000;
    console.log("五级");
    next();
})
app.use(function(req,res,next){
    req.money=req.money-500;
    console.log("六级");
    next();
})

app.get("/",function(req,res){
    res.send(req.money+"");
})


app.listen(4000);