
// var str = 'hello';

// str.indexOf('o') != -1

/*
	str.startsWith('字符') 判断字符串是否以参数字符开头
	str.endsWith('字符') 判断字符串是否以参数字符结尾
	str.includes('字符') 判断参数字符串是否在字符串中
*/

var str = 'hello world';

// 判断str字符串中是否有h字符
console.log(str.includes('h'))

// 判断str字符串是否以hello字符开头
console.log(str.startsWith('hello'));

// 判断str字符串是否以hello结尾
console.log(str.endsWith('hello'));