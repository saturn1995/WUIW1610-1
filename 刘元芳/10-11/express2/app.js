var express=require('express');
var app=express();

var home=require('./router/home');
var news=require('./router/new');
var play=require('./router/play');
app.use("/",home);
app.use("/new",news);
app.use("/play",play);

app.listen(3000);