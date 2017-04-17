// var EventEmitter=require('events').EventEmitter;
// var event=new EventEmitter();
// event.on('some_event',function(arg1,arg2){
// 	console.log('listener1',arg1,arg2)
// });
// event.on('some_event',function(arg1,arg2){
// 	console.log('listener2',arg1,arg2)
// });
// setTimeout(function(){
// 	event.emit('some_event','arg1参数','arg2参数');
// },1000);





var events=require('events');
var eventEmitter=new events.EventEmitter();
//监听器1
var listener1=function listener1(){
	console.log('监听器listener1执行');
}
//监听器2
var listener2=function listener2(){
	console.log('监听器listener2执行');
}
//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);
//绑定connection事件，处理函数为listener2
eventEmitter.addListener('connection',listener2);

var eventEmitters=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventEmitters+"个监听器连接事件");
//处理connection事件
eventEmitter.emit('connection');
//移除监绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不在受监听');
//触发连接事件
eventEmitter.emit('connection');
eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器连接事件');
console.log('程序执行完毕');