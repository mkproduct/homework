
async function foo(src, src2, src3) {
    try {
        var createFirstImg = new Promise(function(resolve, reject){
            var img = document.createElement("img");
            img.src = src;
            resolve(img);
        })
        var loadFirstImg = await createFirstImg;
        document.body.prepend(loadFirstImg);

        
        var createSecondImg = new Promise(function(resolve, reject){
            var img2 = document.createElement("img");
            img2.src = src2;
            resolve(img2);
        })
        var loadSecondImg = await createSecondImg;
        document.body.prepend(loadSecondImg);

        var createThirdImg = new Promise(function(resolve, reject){
            var img3 = document.createElement("img");
            img3.src = src3;
            resolve(img3);
        })
        var loadThirdImg = await createThirdImg;
        document.body.prepend(loadThirdImg);
    
    } catch (e) {
        console.log(e)
    }

}

foo("img/1.jpg", "img/2.jpg", "img/3.jpg")
