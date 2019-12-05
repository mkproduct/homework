// OO variant
/* 
var i = 0;
var box = '';

function Foo() {}
Foo.prototype = {
    add: function (name, year, duration, author) {
        this.musicBox.push({
            name: name,
            year: year,
            duration: duration,
            author: author,
        });
    },
    playList: function () {
        if (this.musicBox[0] == undefined) {
            return console.log("Sorry your playlist are empty :(");
        } else {
            return console.log(this.musicBox);
        }
    },
    playCurrent: function () {
        box = '';
        for (var key in this.musicBox[i]) {
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    },
    next: function () {
        i++;
        if (i < this.musicBox.length) {
            i = i;
        } else {
            i = 0;
        };
        box = '';
        for (var key in this.musicBox[i]) {
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    },
    prev: function () {
        if (i === 0) {
            i = this.musicBox.length;
        };
        i--;
        box = '';
        for (var key in this.musicBox[i]) {
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    }
}

function Bar() {
    this.musicBox = [];
    Foo.call(this);
}
Bar.prototype = Object.create(Foo.prototype);
var bar = new Bar();
 */

// bar.add("Track-01", 2009, "4.17", "Nick");
// bar.add("Track-02", 2013, "6.13", "Jack");
// bar.add("Track-03", 2018, "2.20", "Umbrella");


// bar.playCurrent();
// bar.next();
// bar.next();
// bar.prev();

// bar.playList();






/*
// OLOO variant
var i=0;
var box = '';

var Foo = {
    add: function(name, year, duration, author) {
       this.musicBox.push(
           {
               name: name,
               year: year,
               duration: duration,
               author: author,
           }
       ); 
    },
    playList: function(){
        if(this.musicBox[0] == undefined){
            return console.log("Sorry your playlist are empty :(");
        }else{
            return console.log(this.musicBox);
        }
    },
    playCurrent: function() {
        box = '';
        for(var key in this.musicBox[i]){
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    },
    next: function(){
        i++;
        if(i<this.musicBox.length){
            i = i;
        }else{
            i = 0;
        };
        box = '';
        for(var key in this.musicBox[i]){
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    },
    prev: function(){
        if(i === 0){
            i = this.musicBox.length;
        };
        i--;
        box = '';
        for (var key in this.musicBox[i]) {
            box += key + ' ' + this.musicBox[i][key] + '\t';
        };
        return console.log(box);
    }
}

var Bar = Object.create( Foo );
Bar.musicBox = [];

Bar.add("Track-01", 2009, "4.17", "Nick");
Bar.add("Track-02", 2013, "6.13", "Jack");
Bar.add("Track-03", 2018, "2.20", "Umbrella");


// Bar.playCurrent();
// Bar.next();
// Bar.next();
// Bar.next();
// Bar.prev();

// Bar.playList();

*/




