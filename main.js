//Executing everything within the click event:
function handleClickEvent(e) { 
    var amountDue = document.getElementById("amount-due").value; ////Grabbing the user inputs for amount due and amount recieved and storing them in these vars:
    var amountReceived = document.getElementById("amount-received").value; 
    var beginingAmount = amountReceived - amountDue; //Setting the amount of money to begin with:

if (beginingAmount > 1) {
    var dollarsForReturn = Math.floor(beginingAmount); //returning the dollar value only:
    document.getElementById('dollars-output').innerHTML = dollarsForReturn;
   }
else if(beginingAmount < 0) {
    document.getElementById('more-money').innerHTML = "You owe more money playboy...";
   }
else {   //if theres no dollar value returning 0 (test required this):
    document.getElementById('dollars-output').innerHTML = 0;
   }
   var decimalBig = beginingAmount - Math.floor(beginingAmount);
   let decimal = decimalBig.toFixed(2);
if (decimal > .24) { //setting the quarters to return how many times the input can be /by .25 which is the number of quarters:
    var quarters = Math.floor(decimal/.25); 
    document.getElementById('quarters-output').innerHTML = quarters;
    } //if not returning 0
else {
    document.getElementById('quarters-output').innerHTML = 0;
    }
    var decimalForDimes = decimal % .25;
    var decimalDimesTwo = decimalForDimes.toFixed(2);
if (decimalDimesTwo > .09) { //this is running the same thing as quarters did:
    var dimes = Math.floor(decimalDimesTwo/.10); 
    document.getElementById('dimes-output').innerHTML = dimes;
    }
else { //same pattern for rest of page
        document.getElementById('dimes-output').innerHTML = 0;
    }
    var decimalForNickles = decimalDimesTwo % .10;
    var decimalNickelsTwo = decimalForNickles.toFixed(2);
if (decimalNickelsTwo > .04){
    var nickels = Math.floor(decimalNickelsTwo/.05); 
    document.getElementById('nickels-output').innerHTML = nickels;
    }
else {
    document.getElementById('nickels-output').innerHTML = 0
    }
    var decimalForPennies = decimalNickelsTwo % .05;
    var decimalPenniesTwo = decimalForPennies.toFixed(2);
if (decimalPenniesTwo > 0) {
    var pennies = Math.floor(decimalPenniesTwo/.01);
    document.getElementById('pennies-output').innerHTML = pennies;
    }
else {
    document.getElementById('pennies-output').innerHTML = 0;
    }
};
