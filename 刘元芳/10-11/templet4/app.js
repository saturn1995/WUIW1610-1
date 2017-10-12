var express=require('express');
var app=express();

//设置模板引擎
app.set("views","./views");
app.set("view engine","html");
app.engine("html",require('ejs').renderFile);

app.get("/",function(req,res){
    res.render('index',{title:"模板引擎",h1:"Express",description:"<b>需要在应用中进行如下设置才能让 Express 渲染模板文件</b>",lists:[12,13,14]})

})
app.listen(4000);