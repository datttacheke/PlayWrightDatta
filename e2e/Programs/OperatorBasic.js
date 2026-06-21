var a=1; //
a=2; // re-assignment
var a=3; // re-declaration
console.log(a); // 3

let b=1; // declaration and initialization
b=2; // re-assignment
// let b=3; // re-declaration (This will cause an error)
console.log(b); // 2

const c=1; // declaration and initialization
// c=2; // re-assignment (This will cause an error)
// const c=3; // re-declaration (This will also cause an error)
console.log(c); // 1