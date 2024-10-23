console.log("Hello World")

// Variable

// Let variable named age saving a number 22 for data
let age = 22;
console.log(age);
console.log(typeof age);

// Const variable named name saving a string Martin H. as data
const name = "Martin Helgesen";
console.log(name);
console.log(typeof name);

// Const variable names isPresent saving a boolean false as data
const isPresent = false;
console.log(isPresent);
console.log(typeof isPresent);

// const variable named firstName saving a string Martin as data
const firstName = "Martin";

// const variable named lastName saving a string Helgesen as data
const lastName = "Helgesen";

/* 
Let variable named fullName saving a series of strings and variable names
*/ 
let fullName = "My name is" + " " + firstName + " " + lastName + "!";
// reusing the variable name fullName to view the template string method
fullName = `My name is ${firstName} ${lastName}!`;
console.log(fullName);
console.log(typeof fullName);

// A variable using DOM Manuipulation to display text to a HTML element
const htmlElement = document.querySelector("#javaScriptData");
htmlElement.textContent = fullName;