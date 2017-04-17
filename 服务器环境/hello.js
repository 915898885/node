var http=require('http');
http.createServer(function(request,response){
	//发送HTTP头部
	//Http状态值200 ：ok
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	//发送响应数据'Hello world\'
	response.end('Hello World\n')
}).listen(8888);
//终端打印信息
console.log('Server running ar http://127.0.0.1:8888/');