
const multiply = function(a, b) {
return a * b;
};
console.log(multiply(2, 3)); // 6

const multiply2 = (a, b) => a * b;
console.log(multiply2(2, 7)); // 14

/////////////////////////////
console.log(f); // undefined 
var f = 5;

///////////////////////////////////
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"
typeof NaN; // "number"

let age = 10;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult" if age >= 18, otherwise "Minor"

