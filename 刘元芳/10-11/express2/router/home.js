var express=require('express');
var router=express.Router();
router.route('/')
    .get(function(req,res){
        res.send('get 首页');
    })
    .post(function(req,res){
        res.send('post 首页');
    })

module.exports=router;