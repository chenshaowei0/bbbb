/*var ary = [];

for (var i = 0; i < 10; i++) {
	ary[i] = function () {
		console.log(i);
	}
}

console.log(i); // 10

ary[6](); // 10*/


/*
	循环走了10次 产生了10个块级作用域 在每一个作用域中都会产生一个独立i变量
	在循环体中为ary数组添加元素 元素的类型是函数 函数天生就有局部作用域
*/

var ary = [];

for (let i = 0; i < 10; i++) {
	ary[i] = function () {
		console.log(i);
	}
}

ary[6]();
