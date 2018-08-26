// 强制解构 扩展操作符 ...
// 可以将数组强制拆分成以逗号分隔的零散量

/*
	let ary = ['a', 'b', 'c'];

	// 拆分的结果是有逗号的 只不过逗号放在的console.log里面 逗号显示不出来 console.log是将逗号作为值得分隔
	console.log(...ary); // 'a', 'b', 'c'

	console.log('a','b','c');
*/

/*
	// 1.合并数组

		var ary1 = ['a', 'b', 'c'];
		var ary2 = ['d', 'e', 'f'];

		var ary3 = [...ary1, ...ary2]; // ['a', 'b', 'c', 'd', 'e', 'f']

		console.log(ary3);

	// --------------------------------------------------------------
	
		var ary4 = ['x','y','z'];
		var ary5 = ['a', 'b', 'c'];

		// ary4.push(ary5[0], ary5[1], ary5[2]);

		ary4.push(...ary5);

		console.log(ary4);

*/


/*
	2. 使用强制解构 替代apply方法

		需求： 函数传递参数 参数恰巧在数组中
		
		// ES6以前的方法

		function fn () {
			console.log(arguments);
		}

		var ary = [1,2,3,4,5,6]

		fn.apply(null, ary);

-----------------------------------------------------------------------------
	
		// 利用ES6强制解构实现

		function fn () {
			console.log(arguments)
		}

		var ary = [1, 2, 3, 4, 5]

		fn(...ary); // fn (1, 2, 3, 4, 5)

*/

/*
	3.利用强制解构将伪数组转换为数组

	function sum () {
		// arguments实际上是伪数组 伪数组不是数组 是对象
		// {0: 'a', 1: 'b', 2: 'c', length: 3}
		// 伪数组通常有以下两个特点
		// 1. 对象的键类似数组的下标
		// 2. 对象需要有length属性
		
		// 如果伪数组可以调用数组下面的方法就更好了
		console.log(arguments);
				
		var result = 0;

		// 将伪数组转换为数组
		var argAry = [...arguments];

		argAry.forEach(function (item){
			result += item;
		});

		return result;

	}

	sum (1,2,3,4)

*/

/*
	
	4.利用强制解构 解构字符串

	let str = 'abcdefg';

	console.log([...str]);

*/

/*
		
	对象强制解构允许我们复制对象

	let obj = {name:'zhangsan',age:20};

	// let obj2 = obj;

	let obj2 = {
		...obj,
		age: 30
	}

	console.log(obj2);
	
	console.log(...obj) // 语法过不去 报错 对象解构完成后必须要包裹{}

*/
