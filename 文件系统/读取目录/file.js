var fs=require('fs');
console.log("查看目录")；
fs.readdir('/tem/',function(err,files){
	if(err){
		return console.error(err)
	}
	files.forEach(function(file){
		console.log(file);
	})
})