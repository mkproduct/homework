





async function f(src, src2, src3) {

    var img = document.createElement('img');
    var img2 = document.createElement('img');
    var img3 = document.createElement('img');

    var getSrc = new Promise(function(resolve, reject){
        setTimeout(function () {
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(new Error("error on " + src));
            }
            document.body.prepend(img)
        }, 1000);
    });

    var wait = await getSrc;
    document.body.prepend(wait);



    var getSrc2 = new Promise(function(resolve, reject){
        setTimeout(function () {
            img2.src = src2;
            img2.onload = function () {
                resolve(img2);
            }
            img2.onerror = function () {
                reject(new Error("error on " + src));
            }
            
        }, 1000);
    });
    var wait2 = await getSrc2;
    document.body.prepend(wait2);



    var getSrc3 = new Promise(function(resolve, reject){
        setTimeout(function () {
            img3.src = src3;
            img3.onload = function () {
                resolve(img3);
            }
            img3.onerror = function () {
                reject(new Error("error on " + src));
            }
            
        }, 1000);
    });
    var wait3 = await getSrc3;
    document.body.prepend(wait3);
    
 }

 f("./img/1.jpg", "./img/2.jpg", "./img/3.jpg");





/* 
// цепочка
function showImg(src) {

   return  new Promise(function(resolve, reject) {
        var img = document.createElement('img');
        
        img.src = src;

        img.onload = function () {
            resolve("img downloaded");
        }
            
        img.onerror = function() {
            reject(new Error("error on " + src));
        }

        document.body.prepend(img)
    })
 }

 showImg("./img/1.jpg")
 .then(function(){
     return showImg("./img/2.jpg")
 })
 .then(function(){
     return showImg("./img/3.jpg")
 }) 

*/

















