var fs=require('fs');
var zlib=require('zlib');
//解压input.txt.gz文件为input1.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input1.txt'));
console.log('文件压缩完成');