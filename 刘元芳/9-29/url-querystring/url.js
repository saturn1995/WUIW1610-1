const url=require('url');
console.log(url)

//1.将url字符串转换为对象
var u="  https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash ";
console.log(url.parse(u));

//2.将对象转换为url字符串
var obj={
    protocol: 'https:',
    slashes: true,
    auth: 'user:pass',
    host: 'sub.host.com:8080',
    port: '8080',
    hostname: 'sub.host.com',
    hash: '#hash',
    search: '?query=string',
    query: 'query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string'
    }
console.log(url.format(obj));
var change1=obj.hash;
obj.hash='#home';
console.log(change1)
console.log(url.format(obj));

//3.处理url路径和处理锚点
var one=url.resolve(' https://user:pass@sub.host.com:8080/p/a/t/h','one')
console.log(one);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// querystring - 查询字符串
const qs=require('querystring');
console.log(qs);

var testurl="https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";
var path=url.parse(testurl);  //将url字符串转换为对象
var query=path.query;   //取出对象中的query
var qobj=qs.parse(query);  //将其转换为对象
qobj.query="hhhhh";  //将query的值改为hhhhh
var search="?"+qs.stringify(qobj);
var query=qs.stringify(qobj);
path.search=search;
path.query=query;
console.log(url.format(path));
