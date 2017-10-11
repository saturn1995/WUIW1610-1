var express=require('express');
var router=express.Router();
router.route('/')
    .get(function(req,res){
        res.send('get 娱乐页面');
    })
    .post(function(req,res){
        res.send('post 娱乐页面');
    })
router.route('/list')
    .get(function(req,res){
        res.send('get 娱乐新闻下的列表页面');
    })
    .post(function(req,res){
        res.send('post 娱乐新闻下的列表页面');
    })

module.exports=router;