function Metrics() {
    var currentMetric = 0,
        tarrif = 0.22,
        date = "",
        isPayed = false,
        metrics = [], 
        currentSum = 0,
        conductor = "",
        paymentDate = "";
    
    function setMetric(metric, metricDate, payedBill) {
        currentMetric = metric;
        date = metricDate;
        currentSum = tarrif * metric;
        isPayed = payedBill;
    }

    function Pay(sum, conductorPay) {
        var delta = sum - currentMetric * tarrif;
        conductor = conductorPay;
        paymentDate = new Date();
        currentSum = currentSum -  sum;

        isPayed = true;

        metrics.push({
            currentMetric, 
            isPayed, 
            date, 
            currentSum, 
            conductor,
            paymentDate, 
        });

    }

    function getMetric() {
        var innerMetrics = {
            currentMetric, currentSum, date,  isPayed
        };

        if (isPayed) {
            innerMetrics.conductor = conductor;
            innerMetrics.paymentDate = paymentDate;
        }

        return innerMetrics;
    }

    return {
        setMetric, getMetric, Pay
    }
}

var m1 = new Metrics();
m1.setMetric(450, "18.11.2019", false);
console.log(m1.getMetric());
m1.Pay(50, "Savzali");
console.log(m1.getMetric());