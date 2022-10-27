function doThing(){
    console.log("hey, I'm running the function!");
}

function welcome(firstName){
    console.log("Welcome to the code, " + firstName);
}

function addTwo(x,y){
    console.log("function is starting!");
    var sum = x + y;
    return sum;
    console.log("function is done!");
}

// console.log(addTwo(5,6));
// var sum = addTwo(6,9);
// console.log(sum);

// welcome("Michael");

// doThing();
// doThing();
// doThing();
// doThing();
// for(var i = 0; i < 10; i++){
//     doThing();
// }

// Print all the integers from 1 to 255.
function printNumbers(){
    for(var i = 1; i <= 255; i++){
        console.log(i);
    }
}
// printNumbers();

//Print integers from 0 to 255, and with each integer print the sum so far
function printWithSum(){
    var sum = 0;

    for(var i = 0; i <= 255; i++){
        console.log(i);
        sum += i;
        console.log("Sum so far: " + sum);
    }
}
// printWithSum();

//Given an array, find and print its largest element.
function findMax(arr){
    //max number is first number
    var max = arr[0];
    //loop through array
    for(var i = 0; i < arr.length; i++){
        //if current number is bigger than max
        if(arr[i] > max){
            //current number is the new max value
            max = arr[i];   
        }
        
    }
    return max;
}

var testArr = [4,1,5,100,3,7,-3,9,8,0,-2];
console.log(findMax(testArr));