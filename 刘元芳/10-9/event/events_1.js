var emitter=require("events");
// console.log(emitter)

var util=require('util');
function person(name){
    this.name=name;
}
util.inherits(person,emitter); //继承
var xh=new person('小明');
//定义事件
xh.addListener('say',function(){
    console.log(this.name);
})
xh.addListener('change',function(name){
    this.name=name;
})
//触发事件
xh.emit('change',"123");
xh.emit('say');