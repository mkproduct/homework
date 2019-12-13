

/* 
function foo(){
    // console.log(this.name)
    console.log(this);
}
var user = {
    name: "Jogn",
    fn: foo
}
var a = user.fn();
 */

/* 
// Решение 1: Функция обретка
 var user = {
     name: "John",
     fn: function(){
         console.log(this.name);
     }
 }
setTimeout(function() {
    user.fn()
}, 1000)
 */


/* 
//  Решение 2: Жесикая привяска
 var user = {
     name: "John",
     fn: function(){
         console.log(this.name)
     }
 }
 var fn = user.fn.bind(user);
setTimeout(fn, 2000); 
*/


/* 
// bindAll
 var user = {
     name: "John",
     fn: function(){
         console.log(this.name)
     },
     fn2: function(){
         console.log(this.name, this);
     }

 }
 for (var k in user) {
     if(typeof user[k] == "function") {
         user[k] = user[k].bind(user);
     }
 }
setTimeout(user.fn2, 2000);
 */


/* 
// try catch============================================================

try{
    console.log("first");
    consolxe.log("second");
    console.log("third");

}catch(err) {
    console.log("error")
} */



/* 
// try catch works synchronously

try {
    setTimeout(function(){
        cosnsole.log("did not work")
    },1000)
} catch (error) {
    console.log("did not work")
}
*/

/* 
setTimeout(function(){
    try {
        console.lsog("worked");
    } catch (error) {
        console.log("did not work")
    }
}, 1000);
*/

/* 
// Объект ошибки
try {
   assaa
} catch (e) {
    // console.log(e.name);
    // console.log(e.message);
    // console.log(e.stack);
    // console.log(e);
    // console.log("Ошибка")
} */


