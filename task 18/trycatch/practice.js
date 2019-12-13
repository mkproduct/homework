async function foo(src, src2, src3) {
    try {
        var createFirstImg = new Promise(function (resolve, reject) {
            var img = document.createElement("img");
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject("ошибка в " + src)
            }
        })
        var loadFirstImg = await createFirstImg;
        document.body.prepend(loadFirstImg);


        var createSecondImg = new Promise(function (resolve, reject) {
            var img2 = document.createElement("img");
            img2.src = src2;
            img2.onload = function () {
                resolve(img2);
            }
            img2.onerror = function () {
                reject("ошибка в " + src2)
            }
        })
        var loadSecondImg = await createSecondImg;
        document.body.prepend(loadSecondImg);

        var createThirdImg = new Promise(function (resolve, reject) {
            var img3 = document.createElement("img");
            img3.src = src3;
            img3.onload = function () {
                resolve(img3);
            }
            img3.onerror = function () {
                reject("ошибка в " + src3)
            }
        })
        var loadThirdImg = await createThirdImg;
        document.body.prepend(loadThirdImg);

    } catch (e) {
        console.log(e)
    }

}

foo("img/1.jpg", "img/2.jpg", "img/3.jpg")