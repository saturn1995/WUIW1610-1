var emitter=require("events");

var util=require('util');
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter); //继承
var xh=new person('小明',20);
xh.setMaxListeners(15);
function aa(){
    console.log(this.name);
}
xh.on('say',aa)
xh.on('say',function(){
    console.log(this.age);
})
xh.on('say',function(){
    console.log(3);
})
xh.on('say',function(){
    console.log(4);
})
xh.on('say',function(){
    console.log(5);
})
xh.on('say',function(){
    console.log(6);
})
xh.on('say',function(){
    console.log(7);
})
xh.on('say',function(){
    console.log(8);
})
xh.on('say',function(){
    console.log(9);
})
xh.on('say',function(){
    console.log(10);
})
xh.on('say',function(){
    console.log(11);
})
xh.on('say',function(){
    console.log(12);
})
xh.on('say',function(){
    console.log(13);
})

xh.on('change',function(name){
    this.name=name;
})
xh.emit('say');


