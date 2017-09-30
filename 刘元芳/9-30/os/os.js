const os=require('os');
//1.返回操作系统默认的临时文件夹
console.log(os.tmpdir());

//2.返回CPU的字节序
console.log(os.endianness());

//3.获取计算机名
console.log(os.hostname());

//4.获取操作系统名
console.log(os.type());

//5.获取操作系统名(平台)
console.log(os.platform());

//6.获取计算机的位数
console.log(os.arch());

//7.返回操作系统的发行版本
console.log(os.release());

// 8.返回操作系统运行时间
console.log(os.uptime());

//9.返回内存大小
console.log(os.totalmem());

//10.返回操作系统闲置的内存
console.log(os.freemem());

//11.返回cup的信息
console.log(os.cpus());

//12.获取网络连接口列表
console.log(os.networkInterfaces());