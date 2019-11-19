'use strict';


function Metrics() {

    var tarif = .22,
        currentNumber = 0,
        currentSum = 0,
        payed = 0,
        balance = 0,
        conductor = '',
        date = '',
        isPayed = false;

    function setMerics(setCurrentNumber, setDate) {
        currentNumber = setCurrentNumber;
        currentSum = currentNumber * tarif;
        date = setDate;
    }

    function getMetrics(){
        var checkList = {
            currentNumber,
            currentSum,
            isPayed,
            date,
        }
        if (isPayed == true){
            checkList.conductorName = conductor;
            checkList.balance = balance;
            checkList.payed = payed;
        }
        return checkList;
    }

    function pay(sum, conductorName){
        payed =sum
        balance = payed - currentSum;
        conductor = conductorName;
        isPayed = true;
    }


    return {
        setMerics,
        getMetrics,
        pay
    }
}

var test = new Metrics();

test.setMerics(547, '19.11.2019');
console.log(test.getMetrics());
test.pay(92, 'Рахмонов Х');
console.log(test.getMetrics());
