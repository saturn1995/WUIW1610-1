var crypto=require("crypto");

//md5加密
var pass="admin";
var md5=crypto.createHash("md5");
md5.update(pass);
console.log(md5.digest("hex"));  //hex十六进制

// sha1算法
var pass1="admin";
var sha1=crypto.createHash("sha1");
sha1.update(pass1);
console.log(sha1.digest("hex"));

// Hmac算法
var pass2="admin";
var hmac1=crypto.createHmac("sha1","1234");
hmac1.update(pass2);
console.log(hmac1.digest("hex"));

var pass3="admin";
var hmac2=crypto.createHmac("sha1","wewe");
hmac2.update(pass3);
console.log(hmac2.digest("hex"));