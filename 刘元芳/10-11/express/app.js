var express=require('express');
var app=express();
// 路由路径
// app.get('/re?a',function(req,res){
//     res.send("字符串模式1：/re?a");
// })

// app.get('/re+a',function(req,res){
//     res.send("字符串模式2：/re+a");
// })

// app.get('/re*a',function(req,res){
//     res.send("字符串模式3：/re*a");
// })

// 正则表达式
// app.get(/a/, function(req, res) {
//     res.send('路径中含有a的路径');
// });

// 路由句柄
// 多个回调函数
// app.get('/', function (req, res, next) {
//     console.log('callback1');
//     next();
// }, function (req, res) {
//     console.log('callback2')
//     res.send('成功');
// });

// 回调函数数组
// var aa1 = function (req, res, next) {
//     console.log('aa1');
//     next();
// }
// var aa2 = function (req, res, next) {
//     console.log('aa2');
//     next();
// }
// var aa3 = function (req, res) {
//     console.log('aa3');
//     res.send('成功');
// }
// app.get('/aa', [aa1,aa2,aa3]);

// 混合使用函数和函数数组
var aa1 = function (req, res, next) {
    console.log('aa1');
    next();
}
var aa2 = function (req, res, next) {
    console.log('aa2');
    next();
}
var aa3 = function (req, res,next) {
    console.log('aa3');
    next();
}
app.get('/', [aa1,aa2,aa3],function (req, res, next) {
    console.log('aa4');
    next();
}, function (req, res) {
    console.log('aa5')
    res.send('成功');
});



app.listen(3000);