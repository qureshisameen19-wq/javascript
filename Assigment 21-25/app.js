
// q No.1
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// let fullName = firstName + " " + lastName;

// console.log("Hello " + fullName + "!");

// q no.2
// var phone = prompt("Enter your favorite mobile phone model");

// document.write("My favorite phone is: " + phone + "<br>");
// document.write("Length of string: " + phone.length);

// q no.3
// let word = "Pakistani";

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + word.indexOf("n"));

// // q No.4
// let word = "Hello World";

// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + word.lastIndexOf("l"));

// q No.5
// let word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));

// q No.6
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName + " " + lastName;
// document.write("Full Name: " + fullName);

// q No.7
// let city = "Hyderabad";

// document.write("City: " + city + "<br>");

// let newCity = city.replace("Hyder", "Islam");

// document.write("After replacement: " + newCity);

// q No.8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("message: " + message + "<br>");
// var newMessage = message.split("and").join("&");

// document.write("After replacement: " + newMessage);

// q No.9
// let str = "472";

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof Number(str) + "<br>");

// q No.10
// let userInput = prompt("Enter a string:");
// let upperCaseInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCaseInput);

// q No.11
// let userInput = prompt("Enter a string:");
// let titleCaseInput = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseInput);

// q No.12
// let num = 35.36;
// let numStr = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + numStr);

// q No.13
// let username = prompt("Enter a username:");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//   alert("Please enter a valid username without special characters (@, ., ,, !).");
// } else {
//   alert("Username is valid.");
// }

// q No.14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert("Item found!");
// } else {
//   alert("Item not found.");
// }


// q No.15
// var password = prompt("Enter a password:");
// var isValid = true;

// if (password.length < 6) {
//   isValid = false;
// } else if (!/[A-Za-z]/.test(password)) {
//   isValid = false;
// } else if (!/[0-9]/.test(password)) {
//   isValid = false;
// } else if (/^[0-9]/.test(password)) {
//   isValid = false;
// }
// if (isValid) {
//   alert("Password is valid.");
// } else {
//   alert("Password is invalid. It must be at least 6 characters long, contain letters and numbers, and not start with a number.");
// }

// q No.16
// var university = "University of Karachi";
// var characters = university.split("");
// for (var i = 0; i < characters.length; i++) {
//   document.write(characters[i] + "<br>");
// }

// q No.17
// var word = prompt("Enter a word:");
// var lastCharacter = word.charAt(word.length - 1);
// document.write("User input: " + word + "<br>");
// document.write("Last character: " + lastCharacter);

// q No.18
// var text = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var count = 0;
// var words = text.toLowerCase().split(" ");
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordToCount) {
//     count++;
//   }
// }
// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrences of the word '" + wordToCount + "'.");
 

























































































































































