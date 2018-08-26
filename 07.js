// let和const都是用于声明变量的 
// 区别有一个
// let声明的变量值随便改
// const声明的变量 内存地址不可更改

const PI = 3.1415926;

// PI = 126; 报错

const obj = {
	a: 1
};

// obj = {
// 	b: 2
// } 报错

obj.a = 100;
obj.b = 200;

console.log(obj);