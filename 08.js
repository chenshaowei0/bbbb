// ES6允许我们按照一定的规则从数组或者对象中提取值 重新赋值给另外的变量

// let ary = ["a", "b", "c"];

// let a = ary[0];
// let b = ary[1];
// let c = ary[2];

/*
	基本数组解构赋值
	
	let [a, b, c] = ["a", "b", "c"];

	console.log(a);
	console.log(b);
	console.log(c);
*/

/*
	let [a, b, c] = ["a", "b"];

	console.log(a) // "a"
	console.log(b) // "b"
	console.log(c) // undefined
*/

/*
	let [ , , c] = ["a", "b", "c"];

	console.log(c);

	在等号右边写 [] 代表数组 
	在等号左边写 [] 代表解构赋值
*/