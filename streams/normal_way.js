
//Normal Way
var fs = require('fs');

function copy(src, target) {
	var content = fs.readFileSync(src).toString().toUpperCase();
	fs.writeFileSync(target, content);
}

console.time('normal way');
copy('./test.txt', './test1.txt');
console.timeEnd('normal way');
