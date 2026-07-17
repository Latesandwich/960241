// A1
var x = 10;

if(x === 10){
    var y = 100;
    console.log(y);
}
console.log(y);


// A2
var x = 10;

if(x === 10){
    var y = 100;
    console.log(y);
}
console.log(y);


// A3
var x = 10;

let y2 = 100;
if(x === 10){
    console.log(y2);
}
console.log(y2);


// B1
let myArray = [1, 2, 3]
myArray.forEach(element => {
    console.log(element);
});


// B2
let myArray2 = [1, 2, 3];
for (const iterator of myArray2) {
    console.log(iterator);
}


// B3
let dog = {
    name: "Yoyo", color: "black", age: 2
}

for (const k in dog) {
    console.log(k);
}


// C1
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, numbersOne];
console.log(numbersTwo)


// C2
const numbersOne2 = [1, 2, 3];
const numbersTwo2 = [4, 5, ...numbersOne2];
console.log(numbersTwo2)


// 4. function sum 1+2+3+4
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(fun(1, 2, 3, 4));
