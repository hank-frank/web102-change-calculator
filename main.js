//Executing everything within the click event:
function handleClickEvent(e) { 
    ////Grabbing the user inputs for amount due and amount recieved and storing them in these vars:
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value; 
    //Setting the amount of money to begin with:
    var beginingAmount = amountReceived - amountDue; 
      
console.log(amountDue);
console.log(amountReceived);
console.log(beginingAmount);
   
   //returning the dollar value only:
if (beginingAmount > 1) {
    var dollarsForReturn = Math.floor(beginingAmount);
    document.getElementById('dollars-output').innerHTML = dollarsForReturn;
   }
else if(beginingAmount < 0) {
    document.getElementById('dollars-output').innerHTML = "More money owed, pay up.";
   }
   //if theres no dollar value returning 0 (test required this):
else {
    document.getElementById('dollars-output').innerHTML = 0;
   }
console.log(dollarsForReturn);
   //taking whats left over after the dollars value is "taken", 
   //Math.floor rounds it but poorly so the .toFixed(2) sets the output to only 2 decimal places:
   var decimalBig = beginingAmount - Math.floor(beginingAmount);
   let decimal = decimalBig.toFixed(2);
console.log(decimalBig);
console.log(decimal); 
//setting the quarters to return how many times the input can be /by .25 which is the number of quarters:
if (decimal > .24) {
    var quarters = Math.floor(decimal/.25); 
    document.getElementById('quarters-output').innerHTML = quarters;
    // console.log(quarters);
    } //if not returning 0
else {
    document.getElementById('quarters-output').innerHTML = 0;
    }
    //setting variables to be the value of the decimals after the quarters have been removed by using the remainder
    //need to reset the number of decimals to 2 (toFixed auto rounds correctly):
    var decimalForDimes = decimal % .25;
    var decimalDimesTwo = decimalForDimes.toFixed(2);
console.log(decimalDimesTwo);
console.log(decimal);
if (decimalDimesTwo > .09) { //this is running the same thing as quarters did:
    var dimes = Math.floor(decimalDimesTwo/.10); 
    document.getElementById('dimes-output').innerHTML = dimes;
console.log(dimes);
    }
else { //same pattern for rest of page
        document.getElementById('dimes-output').innerHTML = 0;
    }
    var decimalForNickles = decimalDimesTwo % .10;
    var decimalNickelsTwo = decimalForNickles.toFixed(2);
console.log(decimalNickelsTwo);
if (decimalNickelsTwo > .04){
    var nickels = Math.floor(decimalNickelsTwo/.05); 
    document.getElementById('nickels-output').innerHTML = nickels;
    // console.log(nickels);
    }
else {
    document.getElementById('nickels-output').innerHTML = 0
    }
    var decimalForPennies = decimalNickelsTwo % .05;
    var decimalPenniesTwo = decimalForPennies.toFixed(2);
console.log(decimalPenniesTwo);
if (decimalPenniesTwo > 0) {
    var pennies = Math.floor(decimalPenniesTwo/.01);
    document.getElementById('pennies-output').innerHTML = pennies;
console.log(pennies);
    }
else {
    document.getElementById('pennies-output').innerHTML = 0;
    }
    }