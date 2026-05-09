// let requiredCity = "karachi";
// let requiredskills = "html css js";
// let requiredEducation = "BSSE";

// let city = prompt ("whats your city");
// if (city == requiredCity) {
// let skills = prompt ("whats your skills");
// if (skills == requiredskills) {
//     let Education = prompt ("whats your Education");
//     if (Education == requiredEducation){
//         alert("you are hired welcome");
//     } else{
//         alert ("degree cmplete krlen");
//     }
// } else{
//     alert("skills sekh len")
// }
// } else {
//     ("come to karachi")
// }
//question1 ; 
// let num = 10;

// document.write("Result:<br><br>");

// document.write("The value of num is: " + num + "<br><br>");

// // Increment
// num++;
// document.write("The value of ++num is: " + num + "<br>");
// document.write("Now the value of num is: " + num + "<br><br>");

// // Post-increment
// document.write("The value of num++ is: " + num + "<br>");
// num++;
// document.write("Now the value of num is: " + num + "<br><br>");

// // Decrement
// --num;
// document.write("The value of --num is: " + num + "<br>");
// document.write("Now the value of num is: " + num + "<br><br>");

// // Post-decrement
// document.write("The value of num-- is: " + num + "<br>");
// num--;
// document.write("Now the value of num is: " + num + "<br>");


// //question2;
// var a = 2, b = 1;

// document.write("Initial values:<br>");
// document.write("a = " + a + ", b = " + b + "<br><br>");

// // Step 1
// var step1 = --a;
// document.write("Step 1 (--a): " + step1 + "<br>");
// document.write("Now a = " + a + ", b = " + b + "<br><br>");

// // Reset values
// a = 2; b = 1;

// // Step 2
// var step2 = --a - --b;
// document.write("Step 2 (--a - --b): " + step2 + "<br>");
// document.write("Now a = " + a + ", b = " + b + "<br><br>");

// // Reset values
// a = 2; b = 1;

// // Step 3
// var step3 = --a - --b + ++b;
// document.write("Step 3 (--a - --b + ++b): " + step3 + "<br>");
// document.write("Now a = " + a + ", b = " + b + "<br><br>");

// // Reset values
// a = 2; b = 1;

// // Step 4 (Final Expression)
// var result = --a - --b + ++b + b--;
// document.write("Final Expression (--a - --b + ++b + b--): " + result + "<br>");
// document.write("Final values: a = " + a + ", b = " + b + "<br>");
// 12-13
// question 2
// let num1 = +prompt("enter your number1");
// let num2 = +prompt("enter your number2");

// console.log (num1 > num2);
// if (num1>num2) {
//     alert (${num1} is greater than ${num2});
// } else{
//     (${num1} is less than ${num2})
// }

// let num3 = +prompt("enter your number3");
// let num4 = +prompt("enter your number4");

// console.log (num3 < num4);
// if (num1>num2) {
//     alert (${num3} is less than ${num4});
// } else{
//     (${num3} is greater than ${num4})
// }
// // question 3
// let num = prompt("Enter a number:");

// if (num > 0) {
//     alert("The number is Positive");
// } 
// else if (num < 0) {
//     alert("The number is Negative");
// } 
// else {
//     alert("The number is Zero");
// }
// //question4
// if (
//   character === 'a' || character === 'A' ||
//   character === 'e' || character === 'E' ||
//   character === 'i' || character === 'I' ||
//   character === 'o' || character === 'O' ||
//   character === 'u' || character === 'U'  
// ) {
//   alert(character + ' is a vowel');
// } else {
//   alert(character + ' is not a vowel');
// }
// question5
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

// var password=bakhtawar12
// var userPassword=prompt('Enter your password');
// if(userPassword===''){
//     alert('Please enter your password');
// }
// else if(userPassword===password){
//      alert('Correct! The password you entered matches the original password.')
// }
// else{
//     alert('Incorrect password')
// }

// question6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour=13;
// if(hour<18){
//     greeting='Good day'
//     alert(greeting);
// }
// else{
//     greeting='Good evening';
//     alert(greeting);

// }

// question7

// var time=+prompt('Please enter time in 24 hours \n clock format like: 1900 = 7pm.');
// if(time>=000 && time<1200){
//     alert('Good Morning')
// }
// else if(time>=1200 && time<1700){
//     alert('Good Afternoon')
// }
// else if(time >=1700 && time<2100){
//     alert('Good Evening')
// }
// else if(time >=2100 && time<=2359){
//     alert('Good Night')
// }
// else{
//     alert('Invalid Input')
// }