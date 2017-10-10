var express=require('express');
var app=express();

app.use(express.static('static'));
app.use(express.static('static1'));

var server=app.listen(3000,'localhost',function(){
    console.log("express已经启动");
    console.log("当前项目的地址是：http://%s:%s",server.address().address,server.address().port);
});

