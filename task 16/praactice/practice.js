// variant 1
/* 
var Player = {
    list: [],
    name: "player",
    currentItem: 0,
    played: false,

    next: function () {
        if (this.played) {
            this.currentItem++;
        } else {
            this.currentItem = 0;
        }
    },
    prev: function () {
        if (this.played && this.currentItem > 0) {
            this.currentItem--;
        } else {
            this.currentItem = this.list.length - 1;
        }
    },
    getCurrent: function () {
        return this.list[this.currentItem];
    },
    play: function () {
        this.played = true;
        console.log(this.getCurrent());
    },
    addToList: function (listItem) {
        this.list.push(listItem);
    }
};


// var VideoPlayer = Object.create(Player);
// VideoPlayer.list = [];

var VideoPlayer = {
    list: [],
    uploadToYoutube: function (name) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                console.log("upload to youtube", this.list[i]);
                return
            }
        }
        console.log("can not find file " + name + "to upload to youtube");
    },
    playFromYoutube: function (item) {
        console.log("Playing video from youtube:", item);
    },
    // __proto__: Player, вместо прото использывал  set..Of
}
Object.setPrototypeOf(VideoPlayer, Player);

VideoPlayer.addToList({
    name: "Shashmaqom",
    year: 2000,
    duration: "3,2m",
    authot: "Tajik National"
});

VideoPlayer.addToList({
    name: "Jazz",
    year: 1966,
    duration: "3,2m",
    authot: "Foregn Music"
});

VideoPlayer.uploadToYoutube("Jazz");
// console.log(VideoPlayer);

// console.log(Player);
// console.log("Player list:", Player.list);
 */




// Update variant 2 ====================================================

var buttons = {
    currentSum: 0,
    played: false,
    getList: 0,
    
    addToList(name) {
        this.list.push(name)
    },

    play(){
        this.played = true;
        console.log(this.list[this.currentSum])
    },

    next(){
        if(this.played){
            this.currentSum++;
            if(this.currentSum < this.list.length){
                console.log(this.list[this.currentSum]);
            }else{
                this.currentSum = 0
                console.log(this.list[this.currentSum]);
            }
        }else{
            console.log("click play in order to listen");
        }
    },
    
    prev(){
        if(this.played){
            if (this.currentSum > 0 && this.list.length) {
                this.currentSum = this.currentSum;
            }else{
                this.currentSum = this.list.length;
            }
            this.currentSum--;
            console.log(this.list[this.currentSum]);
        }else {
            console.log("click play in order to listen");
        }
    },

    uploadToYoutube(name){
        for(var i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                console.log("Your request " + this.list[i].name + " is loaded");
                return
            }
        }
        console.log("Sorry your request is not founded :(");
    }



}


var Player = Object.create(buttons);
Player.list = [];

var VideoPlayer = Object.create(buttons);
VideoPlayer.list = [];



VideoPlayer.addToList({
    name: "Shashmaqom",
    year: 2000,
    duration: "3,2m",
    authot: "Tajik National"
});

VideoPlayer.addToList({
    name: "Jazz",
    year: 1966,
    duration: "3,2m",
    authot: "Foregn Music"
});

console.log(VideoPlayer);
console.log(Player);
