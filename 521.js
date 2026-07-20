const student = {
    name: "Piyavach",
    age: 17,
    grade: "A"
};
const { name, age, grade } = student;
console.log(name);


function sayHello(personName = "Guest") {
    console.log(`Hello, ${personName}!`);
}
sayHello();
sayHello("Piya");


const words = ["JavaScript", "is", "fun"];
const sentence = words.join(" ");
console.log(sentence);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result);


let fruits = ["apple", "banana"];
fruits.push("mango");
fruits.pop();
fruits.unshift("orange");
fruits.shift();
console.log(fruits);


let colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2, "purple");
console.log(colors);


let numbers = [0, 1, 2, 3, 4, 5];
const sliced = numbers.slice(2, 5);
console.log(sliced);


const numbers2 = [10, 20, 30, 40, 50];
console.log(numbers2.indexOf(30));
console.log(numbers2.find(num => num > 25));
console.log(numbers2.findIndex(num => num > 25));


const prices = [100, 200, 300];
const pricesWithVAT = prices.map(price => price * 1.07);
console.log(pricesWithVAT);


const scores = [45, 67, 89, 32, 50, 90];
const passed = scores.filter(score => score >= 50);
console.log(passed);


const cart = [100, 200, 50, 150];
const total = cart.reduce((sum, price) => sum + price, 0);
console.log(total);


const nums = [5, 2, 9, 1, 5, 6];
const asc = [...nums].sort((a, b) => a - b);
console.log(asc);

const desc = [...nums].sort((a, b) => b - a);
console.log(desc);