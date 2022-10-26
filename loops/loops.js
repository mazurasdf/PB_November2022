// var microwave = "";
// while(microwave.length < 20){
//     microwave += "m";
// }

// console.log("this is the sound of a microwave: "+ microwave);

// var i = 0;
// while(i >= 0){
//     console.log(i);
//     i++;
// }

// for(var i = 0; i <= 20; i++){
//     console.log("this loop has run " + i + " times");
// }

// var classList = ["Mike Mazur","Anthony", "Charlie", "Balakimwe", "Harry", "Izz", "Matthew", "Mike Connors", "Robert", "Rochelle", "Tugs"];

// for(var i = 0; i < classList.length; i++){
//     console.log("another member of the class is " + classList[i]);
// }

// console.log("the loop is over and the program is done!");

var coins = [25,25,25,1,10,10,1,1,5,25];
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;
console.log(coins.length);

for(var i = 0; i < coins.length; i++){
    // console.log(coins[i]);
    if(coins[i] == 25){
        quarters++;
    }
    else if(coins[i] == 10){
        dimes++;
    }
    else if(coins[i] == 5){
        nickels++;
    }
    else if(coins[i] == 1){
        pennies++;
    }
}
    //if coin value is 25
        //add 1 to quarters
    //else if coin value is 10
        //add 1 to dimes
    //else if coin value is 5
        //add 1 to nickels
    //else if coin value is 1
        //add 1 to pennies

console.log("quarters: " + quarters + ", dimes: " + dimes + ", nickels: " + nickels + ", pennies: " + pennies);