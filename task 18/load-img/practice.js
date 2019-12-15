

window.onload = function() {

    var loadImg = document.getElementsByClassName('load-img');

    new Promise(function(res, rej){

        var tempImg = document.createElement('img');
        tempImg.src = './img/1.jpg';

        tempImg.onload = function () {
            loadImg[0].src = tempImg.src;
            res(loadImg[0].src);
        }
        tempImg.onerror = function () {
            rej(tempImg.src)
        }
    })
    .then(function(result){
        console.log("pisture " + result + " was successfully loaded");
        return new Promise(function(res, rej) {
            var tempImg = document.createElement('img');
            tempImg.src = './img/2.jpg';

            tempImg.onload = function () {
                loadImg[1].src = tempImg.src;
                res(loadImg[1].src);
            }
            tempImg.onerror = function () {
                rej(tempImg.src)
            }
        });
    })
    .then(function(result){
        console.log("pisture " + result + " was successfully loaded");
        return new Promise(function (res, rej) {
            var tempImg = document.createElement('img');
            tempImg.src = './img/3.jpg';

            tempImg.onload = function () {
                loadImg[2].src = tempImg.src;
                res(loadImg[2].src);
            }
            tempImg.onerror = function () {
                rej(tempImg.src)
            }
        });
    })
    .then(function(result){
        console.log("pisture " + result + " was successfully loaded");        
    })
    .catch(function(e){
        console.log("Error on sorce " + e)
    })

}


