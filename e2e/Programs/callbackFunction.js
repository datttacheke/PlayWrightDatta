// The Callback Function
function showResult(sum) {
  console.log("The total is: " + sum);
}

// The Higher-Order Function
function calculateSum(num1, num2, callback) {
  let result = num1 + num2;
  callback(result); // Executing the callback
}

// Passing the function as an argument
calculateSum(5, 10, showResult); 
// Output: The total is: 15