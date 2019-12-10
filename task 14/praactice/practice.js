
// прошлая задача про cloasure
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
//     var a = 0,
//         b = 0;
//     function getSum() {
//         a++; b++;
//         c = a + ' | '  + b;
//         return getSum;
//     }
//     getSum.valueOf = function() {
//         return c;
//     }

//     return getSum;
// }

// var test = sayHi();

// test()()();
// console.log(c)



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




// ============конструктор new 


/*

1) Создасть новый пустой объект
2) Сконструированный объект связывается с [[прототипом]]
3) Контекст this указывает на сконструированный объект
4) за исключение когда функсия вернет свой алтернативный объект, конструктор new вернет сконструированного объекта

function Foo(){}
var a1 = new Foo();
console.log(a1); --> Foo{} что это обозначает? а где на a1 
по сути Chrome говорит {} - это пустой объект,
который был создан функцией с имением "Foo". 

*/

/* 
function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo,
};
obj1.foo(2);
// console.log(obj1.a);

var obj2 = {};
obj1.foo.call(obj2, 3)
// console.log(obj2.a);

var bar = new obj1.foo(4);
// console.log(bar.a);
 */


/* 
function foo(something) {
    this.a = something
}
var obj = {}

foo.call(obj, 10);
var bar = new foo(5);
console.log(obj);
console.log(bar);
 */


/* 
function foo(something) {
    this.a = something;
}

var obj = {};
var bar = foo.bind(obj);
bar(2);
console.log(obj.a);

var baz = new bar(3);
console.log(baz.a);
 */



// ======== [[prototype]]
/* 
у каждого объекта есть прототип и как он  работает?
когда свойтво [[GET]]- ссылается на поискт свойствь по телу obj когда такое имеется то вводит,
а если нет то он ссылается на внутренный ссылку прототип этого объекта и так далее 
поевляется цепочкаб и конец этой цепочки заканчивается при не нахождение в Object.prototype.
 */


// var anotherObj = {
//     a: 2,
// };
// var myObject = Object.create(anotherObj);
// console.log(myObject.a); /* 2 */

// more info about Object.create on down

/* ===================================
примичание! если исползыват цикл for ... in то цикл после итарации тело объекта 
бробежит и по прототипу! + если у нас есть какое ссылка на другой объект(цупочка) 
до так называемы глобалный объекта Object.prototypr!
 */


/* var anotherObj = {
    a: 2,
};
var myObject = Object.create(anotherObj);

for(var key in myObject) {
    console.log(key, myObject[key]);
} */


/* Затенение свойствь=========================
Если у объекта цепочка но при этом два или ... похожих свойствь то 
свойства [[GET]] возврашает собственную свойтву далее затемнеет цепочку 
*/
/* 
var anotherObj = {
    a: 2,
}
var myObject = {
    a: 3,
    __proto__: anotherObj,
} 
console.log(myObject.a);
 */



// Object.create================================
/* 
    Object.create создает новый объект(baz)
    и связовается с объектом которую указали(bar) 
*/

/* 
var bar = {
    foo: function() {
        console.log('It\'s work');
    }
}

var baz = Object.create(bar);
baz.foo();
 */



/* 
Прмечание: Object.create(null) - создает пустой объект 
с пустой ссылкой на [[prototype]] без цепоски
*/

/* 
var bar = Object.create(null);
console.log(bar); --> No prototies
 */

/* 
Второй аргуменнт Object.create для создание 
свойств  с помощю дескрипторов
 */

/*  
var bar = {
    a: 2,
};
var baz = Object.create(bar, 
    {
        b: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: 5
        },
        c: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: 10,
        },
    });
console.log(baz)
*/

/* 
// enumerable===================
var obj = {
    a: 5,
}
Object.defineProperty(obj, "a", {
    enumerable: false,

})
var obj2 = Object.create(obj);
for (var prop in obj2) {
    console.log(prop, obj[prop]);
}
 */



/* 
Дескрипторы============
когда хотим создат или изменит в ручную свойтво объекта при этом имея раширенный вариант параметров
с помощю дескрипторов


Object.defineProperty(objName, "property",{
    enumerable: false, отвечает за (активность) прозрачность 
    writable: false,    для читение изминение
    configurable: false,     когда configurable false после переизменит на true не возможно
    value: 51, значение (can user string)
})

*/

/* 
"use strict";
var anotherObj = {
    a: 2,
}
Object.defineProperty(anotherObj, "a", {
    writable: false,
})
var myObject = Object.create(anotherObj);
myObject.a = 5;
console.log(myObject.a); */


// Наследование ==================================
/* 
function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function(){
    return this.name;
};
function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
    return this.label;
}
var a = new Bar("a", "obj a");
console.log(a.myName());
console.log(a.myLabel());
 */




/* 
// Наследование ==================================
var Task = {
    setID: function(ID) {
        this.id = ID;
    },
    outputID: function() {
        console.log(this.id);
    },
};

var XYZ = Object.create(Task);

XYZ.prepareTask = function(ID, Label){
    this.setID(ID);
    this.label = Label;
};

XYZ.outpetTAskDetails = function() {
    this.outputID();
    console.log(this.label);
}

XYZ.prepareTask('a1sa22as', "John");
console.log(XYZ)

function Foo(){}
var a1 = new Foo();
console.log(a1); */





// Задача на двух примерах функция-конструктор и с помощью объекта
/* 
function Foo(who){
    this.name = who;
}
Foo.prototype.identify = function(){
    return "I am " + this.name;
} 

function Bar(who){
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
    return "Hello, " + this.identify() + ".";
}
var a = new Bar("John");

console.log(a);
console.log(a.speak());
 */

// =================
/* 
var Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function(){
        return "I am " + this.me;
    },
};

var Bar = Object.create( Foo );

Bar.speak = function() {
    return "Hello, " + this.identify() + ".";
}
console.log(Bar)
var b1 = Object.create( Bar );
b1.init("b1");

var b2 = Object.create( Bar );
b2.init("b2");

console.log(b1.speak())
console.log(b2.speak())

 */





/* 


arr = [];
function range(a, b) {
	var i = 0;
	if(a < b){
        for (i = a; i <= b; i++) {
            arr.push(i);
        }
    }else{
        for (i = b; i <= a; a--) {
            arr.push(a);
        }
    }
    console.log(arr)
    
}

function sum(){
    range(10, 9);
    var box = 0;
    for(var prop in arr){
        console.log(box += arr[prop])
    }
}
sum()
*/
/* 
var device = {
    width: 200,
    weight: 200,
    height: "50kg"
}

var phone = {
    camera: "8px"
}

Object.setPrototypeOf(phone, device);

phone.width = 0;
phone.weight = 0;
phone.height = 0;

for (var k in phone){
    console.log(phone);
}


 */






