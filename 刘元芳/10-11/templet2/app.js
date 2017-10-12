var express=require('express');
var app=express();

app.set("views","./views");
app.set("view engine","jade");

app.get("/",function(req,res){
    res.render('index',{title:"模板引擎",h1:"Express",description:"需要在应用中进行如下设置才能让 Express 渲染模板文件"})

})
app.listen(4000);