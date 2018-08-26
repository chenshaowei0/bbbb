/*
	原始声明字符串的方式是有如下问题的

		1.字符串不能换行 当字符串比较长的时候看起来比较混乱
		2.拼接字符串使用加号 代码不容易识别

		var hello = 'world';
		var str = '<div><span><i>'+ hello +'</i></span></div>';
*/

/*
	ES6中新增了[模板字符串]很好的解决了上诉问题

		1.使用反引号声明模板字符串 ``
		2.模板字符串中可以换行
		3.模板字符串中可以解析变量
		4.模板字符串中可以执行函数
			在模板中调用函数 最终的目的是为了显示函数的返回值
*/

let left = 'left123';
let right = 'right456';

const fn = function () {
	return '我是fn函数执行的结果';
}

let template = `
	<div class="box">
		<div class="left">${left}</div>
		<div class="middle">${fn()}</div>
		<div class="right">${right}</div>
	</div>
`;

console.log(template);

