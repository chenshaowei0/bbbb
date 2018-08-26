// let obj = {foo: 'a', bar: 'b'};

// var a = obj.foo;
// var b = obj.bar;

/*
	let {foo, bar} = {foo: 'a', bar: 'b'}

	console.log(foo)
	console.log(bar)
*/

/*
	let {foo: a, bar: b} = {foo: 'a', bar: 'b'};

	console.log(a);
	console.log(b);

	console.log(foo)
	console.log(bar)
*/

function Person ({name, age, height, shuxue, yuwen}) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.shuxue = shuxue;
	this.yuwen = yuwen;
}

// 以下代码一堆数值 别人在看的时候 根本就不知道代表的是什么
// var p = new Person('zhangsan', 15, 170, 65, 88);

let p = new Person ({
	name: 'zhangsan',
	age: 15,
	height: 170,
	shuxue: 65,
	yuwen: 88
});

console.log(p);

// let {name, age, height, shuxue, yuwen} = { name: 'zhangsan', age: 15, height: 170, shuxue: 65, yuwen: 88 }