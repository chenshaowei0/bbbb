// 到目前为止我们已经学习了两种创建数组的方式
// 1.通过字面量的方式       []
// 2.通过构造函数的方式     new Array()

/*
	// 创建了一个拥有四个值得数组
	var ary1 = new Array(1,2,3,4);

	// 创建了拥有5个空值的数组 我们期望的结果应该是[5] 但是现在的结果却是[,,,,]
	var ary2 = new Array(5);

	console.log(ary1);

	console.log(ary2);

*/

/*
	ES6中新增的数组的创建方式就不会有上诉问题

		Array.of() 创建数组	
*/

/*
	let ary3 = Array.of(1,2,3,4,5);
	let ary4 = Array.of(5);
	console.log(ary3);
	console.log(ary4);
*/

// 数组中最后一个逗号后面如果没有值 不算长度
let ary = [,,,];

console.log(ary.length); 

















