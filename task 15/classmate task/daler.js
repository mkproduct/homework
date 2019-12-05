
/* 

var i = 0;
var box = 'Пусто';
var Player = {
    music: [{
            name: 'Track01',
            year: 2009,
            duration: '2.2m',
            author: 'Nick'
        },
        {
            name: 'Track02',
            year: 2010,
            duration: '3m',
            author: 'MAx'
        },
        {
            name: 'Track03',
            year: 2012,
            duration: '3.5m',
            author: 'Andry'
        }
    ],
    play: function () {
        box = Player.music[i].name + '-' + Player.music[i].year + '_' + Player.music[i].duration + '.' + Player.music[i].author;
        console.log(Player.music[i].name + '-' + Player.music[i].year + '_' + Player.music[i].duration + '.' + Player.music[i].author);
    },
    next: function () {
        i++;
        if (i < Player.music.length) {
            i = i;
        } else {
            i = 0;
        }

        console.log(Player.music[i].name + '-' + Player.music[i].year + '_' + Player.music[i].duration + '.' + Player.music[i].author);
    },
    prev: function () {

        if (i > 0) {
            i = i;
        } else {
            i = Player.music.length;
        }
        i--;
        console.log(Player.music[i].name + '-' + Player.music[i].year + '_' + Player.music[i].duration + '.' + Player.music[i].author);
    },
    getCurent: function () {
        console.log(box);
    }
}
Player.play();
Player.next();
Player.next();
Player.prev();
 */

