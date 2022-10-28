var sundae = {
    "flavor":"vanilla",
    "numScoops":3,
    "whippedCream":true,
    "toppings":["hot fudge","pecans"]
}

sundae["shopName"] = "Mitchells Ice Cream";
delete sundae["whippedCream"];

// console.log(sundae);
// console.log(sundae["flavor"]);
// console.log(sundae.toppings);





//Create an array with all the odd integers between 1 and 255 (inclusive).
//create an array
var arr = [];
//loop from 1 to 255
for(var i = 1; i <= 255; i++){
    //if the number is odd(not even)
        //add the number to the array
    if(i % 2 !== 0){
        arr.push(i);
    }
}

// console.log(arr);
//print the array

var arr = [];
//loop from 1 to 255
for(var i = 1; i <= 255; i = i + 2){
    arr.push(i);
}

console.log(arr);