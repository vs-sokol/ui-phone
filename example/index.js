const getTelNumber = require('../');

const singleNumber = "+71234567890";
const normalNumbers = "+71234567890,81234567890,71234567890,1234567890,4567890,567890,67890";
const wrongNumbers = "771234567890,881234567890,234567890,1234,123,23,4";

console.log("Single numbers:", getTelNumber(singleNumber));
console.log("Normal numbers:", getTelNumber(normalNumbers));
console.log("Wrong numbers:", getTelNumber(wrongNumbers));
