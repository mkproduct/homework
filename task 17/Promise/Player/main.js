
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
