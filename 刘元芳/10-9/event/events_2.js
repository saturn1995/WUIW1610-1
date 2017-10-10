var emitter=require("events");

var util=require('util');
function person(name,age){
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter); //继承
var xh=new person('小明',20);

xh.on('say',function(){
    console.log(this.name);
})
xh.on('say',function(){
    console.log(this.age);
})
xh.on('change',function(name){
    this.name=name;
})
xh.emit('say');
xh.emit('change',"权威");
xh.emit('say');
