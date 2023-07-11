//string to array convertor in javascript 
var str = "Hello, World!";
var arr = str.split("");
console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

or 

var str = "Hello, World!";
var arr = [];
for (var i = 0; i < str.length; i++) {
  arr.push(str[i]);
}
console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

