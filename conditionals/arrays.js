console.log("hey it's me, the updated file!");

var classList = ["Mike","Anthony","Charlie","Balakimwe","Harry", "Izz","Matthew", "Mike Connors", "Robert"];
var numbers = [4,8,15,16,23,42];
console.log(classList);//prints full array
// console.log(classList.length);
// console.log(classList[0]);//gives the first element
// console.log(classList[classList.length - 1]);//always gets the last element of the array

classList.push("Rochelle");
classList.push("Tugs");
classList.push("Fernando");
classList.pop();
classList.splice(0,1);//remove 1 element starting at index 0
// console.log(classList);
console.log(classList[classList.length - 1]);