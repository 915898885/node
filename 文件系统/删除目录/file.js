var fs=require('fs');

//执行权创建一个空白的目录
console.log("准备删除目录");
fs.rmdir("/tmp/test",functon(err){
	if(err){
		return console.error(err);
	}
	console.log("读取tmp目录");
	fs.readdir("/tmp/",function(err,files){
		if(err){
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		})
	})
})