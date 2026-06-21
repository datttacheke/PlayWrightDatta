//count prime num btw 1 to 20
function isPrime(num) {

  if (num <= 1)
    return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

function countPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
console.log(countPrime(20));