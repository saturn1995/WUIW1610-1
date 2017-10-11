var express=require('express');
var router=express.Router();
router.route('/')
    .get(function(req,res){
        res.send('get 新闻首页');
    })
    .post(function(req,res){
        res.send('post 新闻首页');
    })
router.route('/list')
    .get(function(req,res){
        res.send('get 列表页');
    })
    .post(function(req,res){
        res.send('post 列表页');
    })
router.route('/list/sports')
    .get(function(req,res){
        res.send('get 体育列表页');
    })
    .post(function(req,res){
        res.send('post 体育列表页');
    })

module.exports=router;