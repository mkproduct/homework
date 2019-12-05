// ========================================
// my variant

var Player = {
    list: [],
    name: "player",
    currentItem: 0,
    played: false,

    next: function () {

    },
    prev: function () {

    },
    getCurrent: function () {},
    play: function () {},
    addToList: function (listItem) {}
};


// var VideoPlayer = Object.create(Player);
// VideoPlayer.list = [];

var VideoPlayer = {
        list: [],
        uploadToYoutube: function (name) {

        }
    },
    playFromYoutube: function (item) {},
    // __proto__: Player, вместо прото исползывал  set..Of
}
Object.setPrototypeOf(VideoPlayer, Player);



VideoPlayer.addToList({
    name: "Shashmaqom",
    year: 2000,
    duration: "3,2m",
    authot: "Tajik National"
});

VideoPlayer.uploadToYoutube("Jazz");
// console.log(VideoPlayer);

// console.log(Player);
// console.log("Player list:", Player.list);






























// ============================================================================
// teacher task
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


var VideoPlayer = Object.create(Player);

VideoPlayer.list = [];

VideoPlayer.uploadToYoutube = function (name) {
    
    for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].name === name) {
            console.log("upload to youtube", this.list[i]);
            return
        }
    }
    console.log("can not find file " + name + "to upload to youtube");
};
VideoPlayer.playFromYoutube = function (item) {
    console.log("Playing video from youtube:", item);
    // this.addToList(item);
};




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

VideoPlayer.uploadToYoutube("Shashmaqom"); */

// console.log(VideoPlayer);
// console.log(Player);


// console.log("Player list:", Player.list);

/*
Инамира вакти console.log("Player list:",  Player.list); якор кадан даркор ки консолда пустой брора

Так как болода list: [] пустой гирифтагием

Неки через VideoPlayer.addToList доб кадагием факат видеода

Неки ихе да Player.list-ам ответи доб кадаги видеора меброра*/




