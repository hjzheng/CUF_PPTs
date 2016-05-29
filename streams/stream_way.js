
//Stream Way
var fs = require('fs');
var through  = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done){
	done();
}

function copy(src, target) {
	fs.createReadStream(src).pipe(stream).pipe(fs.createWriteStream(target));
}

console.time('stream way');
copy('./test.txt', './test2.txt');
console.timeEnd('stream way');
                