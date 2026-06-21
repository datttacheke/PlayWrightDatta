console.log("Hello World");

function reverseString(str) {
  //return str.split("").reverse().join("");
  let reversed = "";  
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello World"));