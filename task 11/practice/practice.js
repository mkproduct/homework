// 'use strict';

function Gorset(){
    var tarif = .22,
        currentNumber = 0,
        currentSum = 0,
        debt = 0,
        prepay = 0,
        payed = 0,
        date = '',
        conductor = '',
        isPayed = false;

        function set(setCurrentNmber, setDate) {
            currentNumber = setCurrentNmber;
            date = setDate;
            currentSum = tarif * currentNumber
        }

        function get(){
            var checkList = {
                currentNumber,
                currentSum,
                prepay,
                debt,
                isPayed,
                date,
                payed
            }
            if(isPayed){
                checkList.conductor = conductor;
            }

            return checkList;
        }

        function pay(sum, setConductor) {
            conductor = setConductor;
            payed = sum;
            isPayed = true;

            var delta = sum - currentSum
            if (delta >= 0){
                debt = delta;
                prepay = 0;
            }else {
                prepay = delta;
                debt = 0;
            }
        }

        return {
            set,
            get,
            pay
        }
}


var test1 = new Gorset();
var test2 = new Gorset();

test1.set(547, '20.11.2019')
console.log(test1.get())
test1.pay(90, 'Рахмонов Х')
console.log(test1.get())

test1.pay(90, 'Рахмонов Х')
console.log(test1.get())

// test1.set(747, '25.12.2019')
// console.log(test1.get())
// test1.pay(220, 'Рахмонов Х')
// console.log(test1.get())



// test2.set(613, '20.11.2019')
// console.log(test2.get())
// test2.pay(140, 'Рахмонов Х')
// console.log(test2.get())

// test2.set(719, '25.11.2019')
// console.log(test2.get())
// test2.pay(130, 'Рахмонов Х')
// console.log(test2.get())





// ====================================================================================
// function Student(){

//     var name,
//         surname,
//         mark;

//         function set(setMark, setName, setSurname){
//             mark = setMark;
//             name = setName;
//             surname = setSurname;
//         }
//         function get(){
//             return {
//                 name,
//                 surname,
//                 mark
//             }
//         }
//         function inc(){
//             return mark++
//         }

//         return {
//             set,
//             get,
//             inc
//         }
// }


// var test1 = new Student();

// test1.set(5,'Student name', 'Student surname');
// console.log(test1.get())

// test1.inc();
// test1.inc();
// test1.inc();
// test1.inc();
// test1.inc();

// console.log(test1.get())


// ====================================================================================

// function foo(){
//     this.counter++
// }
// foo.counter = 0;
// for(var i=0; i<10; i++){
//     foo()
// }

// console.log(foo.counter);
// console.log(counter);




// var obj = {
//     prop: 'hi',
//     func: function(){
//         console.log(this.prop)
//     }
// }

// var f = obj.func
// obj.func();
// f.call(obj)
