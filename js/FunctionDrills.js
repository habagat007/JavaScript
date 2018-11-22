"use strict";


// function for Odd or even
function myOdEven() {
    alert("Welcome to isOdd/isEven function drill");
    var picknum =  prompt("pls pick any whole number");
    var oddeven = parseInt(picknum % 2);
    if (oddeven == 1) {
        return alert("The number that you entered is Odd, this is your number ---> " + picknum);
    } else {
        return alert("This number is Even --- >" + picknum);

    }

}

// function five, will tell you if you the number you enter is 5

function Five(){
    alert("Welcome to FIVE function drill");
    var fives = prompt("pls enter any number from 1 to 5");
    if (fives === 5){
        return alert("bingo! you entered number 5");
    }
    else{
        return alert("The number you entered is " + parseFloat(fives));
    }
}


// Function addFive

function addFive(){
    alert("Welcome to ADDFIVE function drill");
    var plusfive = prompt("pls enter any number then i will add 5 on it");
    if (!isNaN(parseFloat(plusfive))) {
        var total = parseFloat(plusfive) + 5;
        return alert("you entered " + plusfive + " then I add 5 total is " + total);

    } else{
        return alert("pls refresh and enter a number");
    }
}

//function multiple of five

function MultiFive(){
    alert("Welcome to Multiple Of Five function drill");
    var timesfive = prompt("pls enter any number then i will multiply it by 5");
    if (!isNaN(parseFloat(timesfive))) {
        var total1 = parseFloat(timesfive) * 5;
        return alert("you entered " + timesfive + " then I multiply it by 5 total is " + total1);

    } else{
        return alert("pls refresh and enter a number");
    }
}