function rollDice () {
    var die1 = document.getElementById ("die1");
    var die2 = document.getElementById ("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() *6) +1;
    var d2 = Math.floor(Math.random() *6) +1;
    var diceTotal = d1 + d2;
    die1 .innerHTML = d1;
    die2 .innerHTML = d2;
    status.innerHTML ="you rolled "+diceTotatl+".";

    if (die1 + die2 ==7) { document.getElementById("firstFuncOut").innerHTML = "You Lose!"

    }
    if (die1 + die2 ==11) { document.getElementById("firstFuncOut").innerHTML = "You Lose!"

    }
}    


   


    

