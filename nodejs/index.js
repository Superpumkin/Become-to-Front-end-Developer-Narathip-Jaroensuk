const multiply = require("./multiply");
const calculateSquareArea = require("./square");

var squareArea = calculateSquareArea(5, 4);
var totalMultiply = multiply(5, 4);

console.log("Square's Area of 5 and 4 = " + squareArea);
console.log("Multiply of 5 and 4 = " + totalMultiply);