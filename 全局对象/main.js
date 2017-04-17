//console.log(__filename);//当前脚本的绝对路径以及文件名
//console.log(__dirname);//当前脚本的绝对路径




// function printHello(){
// 	console.log("Hello,world");
// }
// var t=setTimeout(printHello,2000);
// clearTimeout(t);


// function printHello(){
// 	console.log("Hello,world");
// }
// var t=setInterval(printHello,2000);



//console.error();//与console.log的用法相同，只是向标准错误流输出
//console.trace();//向标准错误流输出当前的调用栈


// console.info("程序执行开始");
// var counter=10;
// console.log("计数：%d",counter);
// console.time("获取数据");
// //
// //执行一些代码
// //
// console.timeEnd("获取数据");//获取数据的时间
// console.info("程序执行完毕");



// process.on('exit',function(code){
// 	//一下代码永远不会执行
// 	setTimeout(function(){
// 		console.log("该代码不会执行");
// 	},0);
// 	console.log("退出码为",code);
// });
// console.log("程序执行结束");



// //输出到中端
// process.stdout.write("Hello world"+"n");
// //通过参数读取  返回一个数组 第一个数node   第二个脚本文件名  其余是脚本文件的参数
// process.argv.forEach(function(val,index,array){
// 	console.log(index+':'+val);
// });
// //获取执行路径  返回执行当前脚本的Node二进制文件的绝对路径
// console.log(process.execPath);
// //平台信息
// console.log(process.platform);



//输出当前目录
console.log("当前目录："+process.cwd());
//输出当前版本
console.log("当前版本"+process.version);
//输出内存的使用情况
console.log(process.memoryUsage());

