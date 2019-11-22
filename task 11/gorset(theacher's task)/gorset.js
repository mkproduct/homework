function metrics() {
        var currentmetric = 0,
            tarrif = 0.33,
            date = "",
            ispayed = false,
            metrics = [],
            currentsum = 0,
            conductor = "",
            paymentdate = "",
            debt = 0,
            prepay = 0;
    function set(newmetric,datemetric,payment) {
        currentmetric = newmetric;
        date = datemetric;
        ispayed = payment;
        currentsum = tarrif * newmetric;
    } 
    function pay(sum,conductorpay) {
        var difference = sum - currentsum;
        conductor = conductorpay;
        paymentdate = new Date();
        currentsum = currentsum - sum;
    
        if(difference >= 0) {
            prepay = difference;
            debt = 0;
        }
        else {
            debt = difference;
            prepay = 0;
        }
        metrics.push ({
            currentmetric,ispayed,date,currentsum,
            conductor,paymentdate
        })
    }
    function get() {
        var inf = {
            currentmetric,
            currentsum,
            date,
            ispayed,
            debt,
            prepay
        }
        if(ispayed) {
            inf.conductor = conductor;
            inf.paymentdate = paymentdate;
        }
        return inf;
    }
    return {
        set,pay,get
    }
}
var first = new metrics();
var second = new metrics();
var third = new metrics();
first.set(300, "18.11.2019", true);
first.pay(170,"Ahmad");
console.log(first.get());
second.set(200, "16.10.2003", true);
second.pay(100,"Firuz");
console.log(second.get());
third.set(1000, "20.12.2020", false);
third.pay(200,"Ali");
console.log(third.get());