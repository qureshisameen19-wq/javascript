// function greet (userName) {
//     alert (`Hello  ${userName} `)
// }

// greet("sameen")


// function fruit(name1 , name2) {
// console.log(name1 + " " + name2);
// }

// fruit("Mango", "apple");


// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// function sum(value1, value2) {
//     alert(value1 + value2)
// }

// // function multiplication(value1, value2) {
// //     alert(value1 * value2)
// // }

// sum(num1, num2)

// multiplication(num1, num2)\
console.log("hello")

let num1 = +prompt("enter your first num"); //+sameen
let operator = prompt("enter your operator"); //"+"
let num2 = +prompt("enter your second num");

function calculation(value1, value2, opera) {
 if (opera == "+") {
    alert(`Sum is ${value1 + value2}`);
 } else if (opera == "-") {
    alert(`Minus is ${value1 - value2}`);
 } else if (opera == "*") {
    alert(`Multiplication is ${value1 * value2}`);
 } else if(opera == "/"){
    alert (`Division is ${value1 / value2}`);
 } else {
    alert ("Invalid input");
 }
}
calculation(num1,num2,operator);
