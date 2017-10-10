var http=require('http');
var fs=require('fs');
var url=require('url');
var p=require('path');
var formidable=require('formidable');
http.createServer(function(req,res){
    var u=url.parse(req.url);
    if(u.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/"||u.pathname=="index.html"){
        fs.readFile("./index.html",function(err,data){
                res.write(data);
                res.end();
        })
        return;
    }
    if(u.pathname=="/uploads"){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            //判断upload文件夹是否存在
            fs.existsSync('./upload')||fs.mkdir('./upload');  //创建upload
            var d=new Date();
            var path=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            //创建指定日期的文件夹
            fs.existsSync('./upload/'+path)||fs.mkdir('./upload/'+path);  //创建指定文件夹
            var filename=""+d.getTime()+Math.floor(Math.random()*1000)+p.extname(files.avatar.name);
            var lujing='/upload/'+path+'/'+filename;
            console.log(lujing);
            // 读取临时目录中图片并写入到upload/2017-10-10/filename
            //将上传文件的路径返回给前台
            fs.readFile(files.avatar.path,function(err,data){
                fs.writeFile('.'+lujing,data,function(err){
                    res.end(lujing);
                })
            })
        })
    }
    if(fs.existsSync('.'+u.pathname)){
        fs.readFile('.'+u.pathname,function(err,data){
            res.end(data);
        })
    }

}).listen(8000);