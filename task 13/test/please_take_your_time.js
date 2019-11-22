


function fibonacci(){
    var a = 0,
        b = 1,
        c = 0;

    function showClouseru() {
        c = a + b;
        a = b;
        b = c;
        return showClouseru;
    }
    showClouseru.valueOf = function () {
        return c;
    }
    return showClouseru;
}

var fib = fibonacci();
console.log(fib()()()()())
