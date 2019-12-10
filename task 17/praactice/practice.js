/* 

var str = "abubakr";

String.prototype.ownsplit = function (sperator) {
    var arr = [];
    var gab = [];
    for (var i = 0; i < ths.length; i++) {
        if (ths.charAt(i) == sperator) {
            gab.push(ths.charAt(i));
        } else {
            arr.push(ths.charAt(i));
        }
    }
    return arr;
} */

// console.log(str.ownsplit());
// console.log(str.charAt("a"));



/* var arr = [1, 2, 3, 4, 5];

 Array.prototype.reverseArr = function () {
     var t;
     for (var k = 0, i = ths.length - 1; k < i; k++, i--) {
         t = ths[i];
         ths[i] = ths[k];
         ths[k] = t;
         console.log("k " + k);
         console.log("i " + i);
     }
 }
 arr.reverseArr()
 console.log(arr)
  */




// split & join

/* 
var name = "John;Smith";
var nameArr = name.split(';');
console.log(name);
console.log(nameArr);

var testArr = ["Вася", "Петя"];
var testStr = testArr.join(' ')
console.log(testArr);
console.log(testStr);

 */



/* 
st = "Muhammad";
String.prototype.test = function (letter) {
    var arr = [];
    var select = [];
    for (var k of ths){
        if(letter == k) {
            select.push(k)
        }else {
            arr.push(k);
        }
    };
    // arr.push(select)
    return arr;
    
}
// console.log(st.test("a"));
 */







// CallBack==================================================================================================================================================

/* 
function first () {
    setTimeout("console.log(1);",1000)
}
function second () {
    console.log(2);
}

first();
second();
 */
/* 
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        callback(null, script)
    };
    script.onerror = function() {
        callback(new Error())
    }

    document.head.append(script);
}

loadScript("testFile.js", function () {
    loadScript("testFile2.js", function () {
        loadScript("testFile3.js", function () {
            loadScript("testFile4.js", function () {

            });
        });
    });
});
 */

/*
// Второй вариант 
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        callback()
    };
    script.onerror = function () {
        callback(new Error())
    }

    document.head.append(script);
}

loadScript("testFile.js", step1);

function step1(){
    loadScript("testFile2.js", step2);
}
function step2(){
    loadScript("testFile3.js", step3);
}
function step3(){
    loadScript("testFile4.js", function(){});
}
 */




// promise ================================================================================================================================================================================================================================

/* 

// цепоска для скриптов

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;

        script.onload = function () {
            resolve(script);
        }
        script.onerror = function () {
            reject(new Error("Ошибка в " + src));
        }

        document.head.append(script);
    });
}

var promise = loadScript("testFile.js")
.then(function () {
    return loadScript("testFile2.js")
}).then(function () {
    return loadScript("testFile3.js")
}).then(function () {
    loadScript("testFile4.js");
});

 */


/* 
var isMomHappy = true;

var test = new Promise(function(resolve, reject){
    if(isMomHappy){
        var phone = {
            model: "samsung",
            color: "black"
        };
        resolve(phone);
    }else {
        var reason = new Error("Mom is not happy at the moment");
        reject(reason);
    }
});

test.then(function(fulfilled){
    console.log(fulfilled);
}).catch(function (error) {
    console.log(error);
});

*/




/* 
// Цепочка по промису

 new Promise(function(resolve, reject){
     setTimeout(function(){
         resolve(2);
     },2000);
 }).then(function(fulfilled){
     console.log(fulfilled);
     return fulfilled * 2;
 }).then(function(fulfilled){
     console.log(fulfilled);
     return fulfilled * 2;
 }).then(function(fulfilled){
     console.log(fulfilled)
 });
 */


/* 
// Можно возвращат новый промис в обработчи
 var promise = new Promise(function(resolve, reject){
    resolve(2);
 }).then(function(fulfilled){
     console.log(fulfilled);
     return new Promise(function(resolve){
         resolve(fulfilled*2)
     })
 }, null).then(function (fulfilled){
     console.log(fulfilled);
 });

 */

/* 
// промис с переменной
var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function(fulfilled){
    console.log(fulfilled)
    return fulfilled * 5;
}).then(function(fulfilled){
    console.log(fulfilled);
})
*/


// Async/await ================================================================================================================================================================================================================================

/* 
async function fn(){
    return "Hello World";
}
fn().then(function(fulfilled){
    console.log(fulfilled);
})
*/

/* async function fn(){
    var isSwitch = true;
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(isSwitch){
                resolve("resolved");
            }else{
                reject("error")
            }
        }, 2000)
    });

    var wait = await promise;

    console.log(wait)
    
}
fn() */



/* 
var promise = loadScript("testFile.js")
    .then(function () {
        return loadScript("testFile2.js")
    }).then(function () {
        return loadScript("testFile3.js")
    }).then(function () {
        loadScript("testFile4.js");
    });

 */


// Player with promise

var Player = {
    list: [],
    name: "player",
    currentItem: 0,
    played: false,

    next: function () {
        var ths = this;
        return new Promise(function () {
            ths.currentItem++;
            if (ths.played && ths.currentItem < ths.list.length) {
                ths.currentItem = ths.currentItem
            } else {
                ths.currentItem = 0;
            }
        })
    },
    prev: function () {
        ths = this;
        return new Promise(function () {
            if (ths.played && ths.currentItem > 0) {
                ths.currentItem = ths.currentItem;
            } else {
                ths.currentItem = ths.list.length;
            }
            ths.currentItem--;
        })
    },

    getCurrent: function () {
        var ths = this;
        return new Promise(function (resolve) {
            resolve(ths.list[ths.currentItem]);
        })
    },

    play: function () {
        this.played = true;
        var ths = this;
        return new Promise(function (resolve, reject) {
            if (ths.list[ths.currentItem] == undefined) {
                reject("Playlist is empty")
            } else {
                resolve(ths.list[ths.currentItem])
            }
        })
        .then(function (fulfilled) {
            console.log(fulfilled);
        }, function (error) {
            console.log(error);
        });
    },

    addToList: function (listItem) {
        var ths = this;
        new Promise(function (resolve, reject) {
            if (typeof listItem === "object") {
                ths.list.push(listItem);
            } else {
                reject("Please add your track on object and try again")
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },

};


var VideoPlayer = Object.create(Player);
VideoPlayer.list = [];

VideoPlayer.uploadToYoutube = function (name) {
    var ths = this;
    new Promise(function (resolve, reject) {
        var succesSearch = 'Upload to YouTube ';
        for (var i = 0; i < ths.list.length; i++) {
            if (ths.list[i].name === name) {
                resolve(succesSearch += ths.list[i].name);
                return
            }
        }
        reject("Sorry, your request is not defined")
    })
    .then(function (fulfilled) {
        console.log(fulfilled, );
    }, function (error) {
        console.log(error);
    })
}


VideoPlayer.addToList({
    name: "Shashmaqom",
    year: 2000,
    duration: "3,2m",
    authot: "Tajik National"
});

VideoPlayer.addToList({
    name: "jazz",
    year: 1962,
    duration: "3,2m",
    authot: "Foregn track"
});

VideoPlayer.addToList({
    name: "classic",
    year: 1963,
    duration: "3,2m",
    authot: "Foregn track"
});


// VideoPlayer.uploadToYoutube("classic")


// VideoPlayer.play();

// VideoPlayer.next();
// VideoPlayer.play();

// VideoPlayer.prev();
// VideoPlayer.play();


// console.log(VideoPlayer);
// console.log(Player);

