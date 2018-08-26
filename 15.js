/*
	遍历数组方式如下

		1.for
		2.for in
		3.forEach
		4.for of
*/

var ary = ['a', 'b', 'c'];

ary.abc = 345;

// 向数组元素的后面添加123元素
// ary.push(123);

// console.log(ary[3]);

// console.log(ary.abc);

// 遍历数组代码过于繁琐
// for (var i = 0; i < ary.length; i++) {
// 	console.log(ary[i]);
// }


// 不仅可以将数组元素循环出来 还能将数组对象下面的属性循环出来
// for (var attr in ary) {
// 	console.log(ary[attr]);
// }


// 不能终止循环
// ary.forEach(function (item, index){
// 	console.log(item);
// 	if (item == 'a') {
// 		return;
// 	}
// });

// 默认情况下输出的是数组的值 item代表数组的值
// for (let val of ary) {
// 	console.log(val);
// }

// for (let key of ary.keys()) {
// 	console.log(key);
// }

// for (let item of ary.entries()) {
// 	console.log(item)
// }

// 可以终止循环
// for (let val of ary) {
// 	console.log(val);
// 	if (val == 'a') {
// 		break;
// 	}
// }

// 只遍历数组元素 不遍历数组对象属性
for (let val of ary) {
	console.log(val);
}

