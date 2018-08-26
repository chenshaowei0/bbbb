/*
	let [a, ...b] = ['a','b','c','d'];

	console.log(a); // 'a'
	console.log(b); // ['b','c','d']
	console.log(c);

	let [a, ...b, c] = ['a','b','c','d']; // 错误写法 剩余参数必须出现在最后一项
*/

/*
	// operator 操作符
	// calculations 计算数
	function calc (operator, ...calculations) {

		let result = 0;

		if (operator == '+') {

			for (var i = 0; i < calculations.length; i++) {

				result += calculations[i];

			}
				
		}

		return result;
			
	}

	var result = calc ('+', 10, 20, 30);

	console.log(result);

*/