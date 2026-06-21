function checkEqualsOperator(a, b) {
    return a === b;
    return a == b;
}
console.log(checkEqualsOperator(5, 5)); // true  // true
console.log(checkEqualsOperator(5, '5')); // false // true
console.log(checkEqualsOperator(0, false)); // false // true
console.log(checkEqualsOperator(null, undefined)); // false // true