


// ==================================	window

// function func1(){
	// для url / name / params
	// window.open('https://webref.ru', 'webref', "width=500,height=500,top=100,left=500")
// }



// url 
// name  указываем url address
// если имя одинаковие то попат аддресс обнавляестся

// function func2(){
	// для url, src / name / params
	// window.open('form/index.html', 'webref', 'width=500,height=500,top=100,left=500')
// }






// ==================================	хоистинг & замыкание
/*
let a=5;

function func1(){
	let a=2;
	function func2(){
		let b=6;
		console.log(a= b);
	}
	func2();
}
func1()

*/




/*
let m = func1();

function func1(){
	let i=0;
	// console.log(i);
	return function(){
		i++;
		console.log(i);
	}
}
m();
*/




