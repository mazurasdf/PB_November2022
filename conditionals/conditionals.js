var coin = 0.5;
var coinType;

if(coin > 10){
    console.log("that's a quarter");
    coinType = "quarter";
}
else if(coin > 5){
    console.log("that's a dime!");
    coinType = "dime";
}
else if(coin > 1){
    console.log("that's a nickel!");
    coinType = "nickel";
}
else if(coin == 1){
    console.log("that's a penny!");
    coinType = "penny";
}
else{
    console.log("that's too small!");
}

console.log("and that's your coin!");
// console.log(14 > 100);
// console.log(14 < 100);
// console.log(20 == 509);

var isRaining = false;
var isSunny = true;
var temp = 25;
if(temp > 60 && isRaining){
    console.log("you should bring an umbrella");
}
else if(temp <= 60 && isRaining){
    console.log("you should wear a rain jacket!");
}
else if(temp > 60 && !isRaining){
    console.log("sounds nice! have fun!");
}
else if(temp >= 45 && temp <= 60 && !isRaining){
    console.log("maybe a sweater is good");
}
else{
    console.log("you should wear a coat");
}

if(isSunny || temp > 80){
    console.log("maybe try to bring some sunglasses!");
}

