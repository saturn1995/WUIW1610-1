var path=require('path');
// console.log(path);
// console.log(path.sep);

//1.规范路径
var p="c:/qwe/sdf/../";
console.log(path.normalize(p));

//2.用于连接路径
var a=__dirname;
console.log(path.join(a,"../nodejs.js"));

//3.将路径转化为绝对路径
console.log(path.resolve("../path/path1.js"));

//4.判断是否为绝对路径
console.log(path.isAbsolute(a));
console.log(path.isAbsolute(p));

//5.将路径转换为相对路径
var b=__dirname;
var c="nodejs.js";
console.log(path.relative(b,c));

//6.返回路径中代表文件夹的部分
var d=__filename;
console.log(d);
console.log(path.dirname(d));

//7.返回所需要的文件名
console.log(path.basename(d));

//8.返回文件的后缀名
var f=__filename;
console.log(path.extname(f));

//9.返回路径字符串的对象
console.log(path.parse(f));