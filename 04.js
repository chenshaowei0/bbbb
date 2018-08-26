var hello = 'world';
console.log(hello);

var ary = ['a', 'b', 'c'];

for (var i = 0; i < ary.length; i++) {
	console.log(ary[i]);
}

function fn () {
	console.log('我是fn函数');
}

fn ();

if (hello == 'world') {
	console.log('我是条件判断')
};

var obj = {
	a: 1,
	b: 2
}

for (var attr in obj) {
	console.log(obj[attr]);
}

