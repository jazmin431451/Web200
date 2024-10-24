"use strict";

// Initialize variables with different data types
const integerVar = 42;
const floatVar = 3.14;
const stringVar = "Hello, World!";
const nullVar = null;
let undefinedVar;

// Demonstrate operations and conversions
const sum = integerVar + floatVar;
const stringConcatenation = stringVar + " JavaScript";
const numericConversion = Number("123");
const floatToFixed = floatVar.toFixed(2);

// Display variable types and results
console.log(`Type of integerVar: ${typeof integerVar}`);
console.log(`Type of floatVar: ${typeof floatVar}`);
console.log(`Type of stringVar: ${typeof stringVar}`);
console.log(`Type of nullVar: ${typeof nullVar}`);
console.log(`Type of undefinedVar: ${typeof undefinedVar}`);

console.log(`Sum: ${sum}`);
console.log(`String Concatenation: ${stringConcatenation}`);
console.log(`Numeric Conversion: ${numericConversion}`);
console.log(`Float to Fixed: ${floatToFixed}`);
