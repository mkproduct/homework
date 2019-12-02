


// ==================================	this, call, apply and bind

			// this
// 4 способа определение контекста this

// 1) Вызвана с new ? Исползуем только что созданный объект
// 2) Вызвано с помощью call или apply (или bind)? Исползуем указанный объект(жесткое указание)
// 3) Вызвано с объектом контекста(явное указание), владеющего вызовом функции? Исползуем этот объект конекста
// 4) По умолчанию:(не явное указание) undefined в режиме strict mode, в противнос случае объект globalThis.



// Жесткое указание с помощю call
// function foo(num) {
//     console.log("foo " + num);
//     this.count++;
// }
// foo.count = 0

// var i;
// for(i = 0; i<10; i++) {
//     if(i>5) {
//         foo.call(foo, i)
//     }
// }
// console.log(foo.count)

//  ========================примичание!
/* 
если передадим в качество аргумента 
null & udenfined то применится
присвоивание по умолчанию
 */

/* 
function foo(something){
    this.a = something;
}
var a;
foo.call(null, 10)
console.log(a);
 */

// ============================

// влияние use strict

// function foo() {
//     console.log(this.a);
// }
// var a = 2;

// function bar() {
//     "use strict"
//     foo();
// } 
// bar();

// ============================

// Явное указание

// function foo() {
//     console.log(this.a);
// }

// var obj1 = {
//     a: 42,
//     foo: foo,
// }

// obj1.foo();

// ============================

// Ссылаесмся и тут же вызаваем

// function foo() {
//     console.log(this.a);
// }

// var obj1 = {
//     a: 42,
//     foo: foo,
// }

// var obj2 = {
//     a: 2,
//     obj: obj1,
// }

// obj2.obj.foo();

// ============================

// Точка состояние вызыова

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 42,
//     foo: foo,
// }

// var obj2 = {
//     a: 2,
//     foo2: foo,
// }

// var a ="ой глобальная";

// obj.foo();
// var bar = obj.foo;
// bar();

// ============================

// function foo() {
// 	console.log(this.a);
// }
// var obj = {
// 	a: 2,
// 	foo: foo,
// };

// var a = "ой глобалная";

// setTimeout(obj.foo(), 100);




// call ==============================Жесткое указание

/* 
function show(){
	// console.log(this.firstName, this.lastName);
	// console.log(this[0], this[1]);
	// console.log(this)
}

// обращаемся на объект user
let user = {
	firstName: 'John',
	lastName: 'Smith'
}
// show.call(user);

// обращаемся к массиву
let arr = ['elem1', 55];
// show.call(arr)

// обращаемся к переменую
let ml = 61;
// show.call(ml);
 */



// args

/* 
function show(a, b, c){
	console.log(this[a], this[b], c);
}
let user = {
	firstName: 'alem1',
	lastName: 'alem2',
}
show.call(user, 'firstName', 'lastName', 95);
 */



// bind=======================================
/* 
function show (a) {
	console.log(this.a + this[a])
}
let user = {
	b: 4,
	a: 13
}
show.bind(user, 'b');
show() --> undefined
 */

/* 
 function show(b) {
 	console.log(this.a + this[b]);
 }
 var user = {
 	b: 4,
 	a: 13
 };
 var start = show.bind(user, 'b');
 start()
 */


// apply=======================================

/* 
function show(a) {
	console.log(this.firstName, this.lastName, this[a]);
}

let user = {
	firstName: 'alem1',
    lastName: 'alem2',
    age: 30
}
show.apply(user, ['age']);
 */


/* 
function foo(arg1, arg2) {
    return this.b = arg1 + arg2;
}
var obj = {
    a: 2,
}
var bar = function() {
    return foo.apply(obj, arguments);
}

var b = bar(3, 5);
console.log(b)
 */





// ==================================	парсинг / замыкание(cloasure)

// token	
// var a = 2,

 /*
[
	    {
	        "type": "keyword",
	        "value": "var",
	    }

	    {
	        "type": "identifier",
	        "name": "a",
	    }

	    {
	        "type": "punctuator", (operator)
	        "value": "=",
	    }

	    {
	        "type": "Numeric", (Litaral)
	        "value": "2",
	    }

	    {
	        "type": "punctuator", (operator)
	        "value": ",",
	    }
	]


// =================================Dom
	var a;
	a = 2

	program {
	    {
	        type: "varibleDeclaration ",

	        "declarations": [
	            {
	                "type": varibleDeclaration,
	                "id": {
	                    type: "identifier",
	                    name: a,
	                }
	            },"init" : null,
	        ]
	    },

	    {
	        "type": "ExpressionStatement", (выражение)
	            expression: [
	                "type": "AssignmentExpression",
	                "operator": "=",
	                "left": {
	                    "type": "Identifier",
	                    "name": "a"
	                },
	                "right": {
	                    "type": "Literal",
	                    "value": 2,
	                    "raw": "2"
	                }
	            ]
	    }

	}
 */


// Saving on hoisting	=======================

/* 

var a = 2,
	b = "Hi",
	d;
LexicalEnvironment
1) Environment Record:
2) Ссылка на внешнее лексическое окружение
{
	a: 2, --> null
	b: "hi", 
	d: undefined, 
	saHi: function,
}

// Вложная лексическая область видимост
sayHi("john")
function sayHi(name){
	alert(name);
	.....
	.....
	.....
	.....
	
	[[Environment]]
	name: "John", --> outer

}

// Отсуда поевляется ответ на вопрос что такое cloasure(замыкание)
function sayHi() {
	var a = 5;

	function sayBye() {
		var b = 5,
			c;
		c = a + b
	}

}

*/

/*
// сборщик мусора

var user ={
	....
	....
	....
} 

user = null;


function saHi(){
	...
	...
	...
	...
}
saHi(); ---> boxes


*/


/*

// немного про var 
все действие исключая let / "use strict"

a = 10;
var a;
console.log(a);

var в блоках:

{
	var a = 10;
}

console.log(a);

for(var i = 0; i < 3; i++) {
	
}
console.log(i);

function saiHi(){
	phrase = "hi";
	if(false) {
		var phrase;
	}
	console.log(phrase);
}

function saiHi(){
	console.log(phrase);
	var phrase = "hi"
}

*/



// пару задач про cloasure

// function sayHi() {
// 	var a = 1,
// 		b = 1;

// 	function fn() {
// 		a++;
// 		b++;
// 		return console.log(a + ' ' + b)
// 	}

// 	function getFoo() {
// 		fn()
// 		return getFoo;
// 	}
// 	return getFoo;
// }
// var test = sayHi();
// test()()();



// function sayHi(){
// 	var b = 0,
// 		c = 0;
// 	function getSum(a) {
// 		var a = a;
// 		c = a + b;
// 		a = b;
// 		b = c;
// 		return b;
// 	}
// 	return getSum;
// }
// var test = sayHi();
// console.log(test(3));
// console.log(test(6));
// console.log(test(3));



// function makeCounter() {
// 	var count = 0;
// 	return function(){
// 		return count++
// 	};
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());










































