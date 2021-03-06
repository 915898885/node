var fs=require('fs');
var buf=new Buffer(1024);
console.log("准备打开文件");
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("文件打开成功");
	console.log("截取10字节后的文件内容");
	//截取文件
	// fs.ftruncate(fd, len, callback)
	// fd - 通过 fs.open() 方法返回的文件描述符。
	// len - 文件内容截取的长度。
	// callback - 回调函数，没有参数
	fs.ftruncate(fd,10,function(err){
		if(err){
			console.log(err);		
		}
		console.log('文件截取成功');
		console.log('读取相同的文件');
		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if(err){
				console.log(err)
			}
			//仅输出读取的字符
			if(bytes>0){
				console.log(buf.slice(0,bytes).toString());
			}
			//关闭文件
			fs.close(fd,function(err){
				if(err){
					console.log(err)
				}
				console.log('关闭文件成功');
			})
		})
	})
})