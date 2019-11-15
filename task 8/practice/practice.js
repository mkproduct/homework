
 // ==================================	print array with recursion



	 // i = 0	1	2	3	4	5
// length = 5	5	5	5	5	5
// array=	0	1	2	3	4	

/*let arr = ['K','M', 9, 10, 8991];
console.log(arr.length)

print(arr, 0);

function print(arr, i){
	if (i<arr.length){
		console.log(i + ' < ' + arr.length);
		// console.log(arr[i])
		// console.log(`${i} < ${arr.length} = ${i<arr.length}`);
		i++;
		print(arr, i)
	}
}
*/

/*
console.log(i + ' < ' + arr.length + ' = ' + i<arr.length)
console.log(`${i} < ${arr.length} = ${i<arr.length}`);

*/


 // ==================================	this call apply
/*
function func(){
	console.log(this);
}
let obj = {
	objElmt: func
}
// ключевая слова this указывает тот объект который было вазвано
 window.func()
 obj.show()
*/


	// this
// console.log(this);
// console.log(this.innerWidth);

// function func(){
// 	console.log(this)
// }
// func();


// let btn=document.querySelector('button').onclick=func;
// function func(){
// 	console.log(this);
// 	this.style.transition = '.5s';
// 	this.style.fontSize = '50px';
// }



	// call

// function show(){
// 	console.log(this.firstName, this.lastName);
// }
// let obj = {
// 	firstName: 'Muhammad',
// 	lastName: 'Kuysunov'
// }
// show.call(obj)



	// args
// note: аргументы которые во внутри
// '' - обозначает строку можно и без '' если это число.

/*
function show(a, b, c){
	console.log(this[a], this[b], this[c]);
}
let obj = {
	firstName: 'Muhammad',
	lastName: 'Kuysunov',
	age: 21
}
show.call(obj, 'firstName', 'lastName', 'age');
*/


	// bind
/*function show (a) {
	console.log(this.a + this[a])
}
let cfc = {
	b: 4,
	a: 13
}

show.bind(cfc, 'b')()

*/



	// apply
// let user = {
// 	firstName: 'Muhammad',
// 	lastName: 'Kuysunov',
// 	age: 5 
// }
// function show(a){
// 	console.log(this.firstName, this.lastName, this[a]);
// }
// show.apply(user, ['age']);







// ==================================	recursion task



// var a = 18;
// var b = 30;

// gcd(a,b);

// function gcd(a,b){
// 	if(b == 0){
// 		return a;
// 	}else{
// 		let t = a%b;
// 		return gcd(b,t) 
// 	}
// }

// 18%30=18


// Azamat task understending

// var a = 18;
// var b = 30;
// NOD(a,b);
// function NOD(a, b){
//     if(a % b == 0){
//         console.log(b);
//     }else{
//             let tmp = a % b;
//             a = b;
//             b = tmp;
//             NOD(a, b);
//     }
// }

// tmp =18	18%30=18
// a =30
// b =18

// tmp =12	30%18=12
// a =18
// b =12

// tmp =6	18%12=6
// a=12
// b=6


// if (12%6=0 == 0){
	// console.log(6)
// }










