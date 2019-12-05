function Player(){}

Player.prototype = {
    add: function(_name, _year, _duration){
        let obj = {};
        obj.name = _name;
        obj.year = _year;
        obj.duration = _duration;
        obj.upload = false;
        this.reprList.push(obj);
    },
    showList: function(){
        if(this.reprList.length){
            for (let j of this.reprList){
                console.log(j);
            }
        }else this.empList();
    },
    empList: function(){
        console.log("Your player list is empty!");
    },
    playCurrrent: function(){
        if(this.reprList.length){
            if(typeof this.reprList[this.i] === "undefined"){
                this.empList();
            }
            else console.log(this.reprList[this.i]);
        }else this.empList();
    },
    playNext: function(){
        if(this.reprList.length){
            var j = +this.i;
            if(typeof this.reprList[j + 1] == "undefined"){
                console.log("There is no next video in list!");
            }
            else console.log(this.reprList[j + 1]);
        }else this.empList();
    },
    playPrevious: function(){
        if(this.reprList.length){
            let j = +this.i;
            if(typeof this.reprList[j - 1] === "undefined"){
                console.log("There is no previous video in list!");
            }
            else console.log(this.reprList[j - 1]);
        }else this.empList();
    },
    searchList: function(_name){
        if(this.reprList.length){
            for (let j in this.reprList){
                if (this.reprList[j].name == _name){
                    this.i = j;
                    this.playCurrrent();
                    break;
                }else if (j == this.reprList.length - 1){
                    console.log("Cannot find this video!");
                    break;
                }
            }
        }else this.empList();
    },
}    

function videoPlayer(){
    this.reprList = [];
    this.i = 0;
}

videoPlayer.prototype = Player.prototype;

videoPlayer.prototype.upload = function(_name){
    if(this.reprList.length){
        for(let j in this.reprList){
            if(this.reprList[j].name == _name){
                this.reprList[j].upload = true;
                console.log("Video successfully uploaded!");
                break;
            }else if(this.reprList.length - j == 1){
                console.log("There is no such video in your playlist!");
            }
        }
    }else this.empList();
}
videoPlayer.prototype.playFromYouTube = function(_url, _name, _year, _duration){
    this.add(_name, _year, _duration);
    console.log(this.reprList[this.reprList.length - 1]);
}

let yyy = new videoPlayer();

yyy.add("addd", 123, "14:00");
yyy.add("azamat", 1954, "15:42");
yyy.add("abubakr", 2954, "90:00");
yyy.add("sabohiddin", 1944, "5:00");
yyy.add("olim", 2211, "54:14");

// yyy.showList();
// yyy.searchList("sabohiddin");
// yyy.searchList("rrr");

// yyy.playPrevious();
// yyy.playCurrrent();
// yyy.playNext();

// yyy.upload("abubakr");
// yyy.playFromYouTube("https...", "uuu", 1777, 16);
// yyy.showList();


















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

