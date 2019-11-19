


// ==================================	this, call, apply and bind

// this

// console.log(this);
// console.log(this.innerWidth);

// function func(){
// 	console.log(this)
// }
// func();


// при вызове событие(функции) this станять тот эл/т который вызвал эту событию

// let btn=document.querySelector('button').onclick=func;
// function func(){
// 	console.log(this);
// 	/*this.style.transition = '.5s';
// 	this.style.fontSize = '50px';*/
// }



// call

// function show(){
// 	// console.log(this.firstName, this.lastName);
// 	// console.log(this[0], this[1]);
// 	// console.log(this + 7)
// }

// обращаемся на объект user
// let user = {
// 	firstName: 'Muhammad',
// 	lastName: 'Kuysunov'
// }
// show.call(user);

// обращаемся к массиву
// let list = ['elem1', 55];
// show.call(list)

// обращаемся к переменую
// let ml = 61;
// show.call(ml);




// args

// function show(a, b, c){
// 	console.log(this[a], this[b], c);
// }
// let user = {
// 	firstName: 'alem1',
// 	lastName: 'alem2',
// }
// show.call(user, 'firstName', 'lastName', 95);



// bind
// function show (a) {
// 	console.log(this.a + this[a])
// }
// let user = {
// 	b: 4,
// 	a: 13
// }
// show.bind(user, 'b');



// apply

// function show(a) {
// 	console.log(this.firstName, this.lastName, this[a]);
// }

// let user = {
// 	firstName: 'alem1',
// 	lastName: 'alem2',
// }

// show.apply(user, ['age']);





// ==================================	хоистинг & замыкание(cloasure)
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






// function parent(){
// 	return function (){
// 	}
// }
// console.log(parent())



// function parent(){
// 	let num = 10;
// 	return function (){
// 		console.log(num = num + 10)
// 	}
// }
// let call = parent();
// call()


// function urlGeneraot(domain) {
// 	return function (url) {
// 		return `https://${url}.${domain}`;
// 		// return 'https://' + url + '.'+ domain;
// 	}
// }
// let start = urlGeneraot('com');
// let startTj = urlGeneraot('tj');

// console.log(start('google'))
// console.log(startTj('somon'))






