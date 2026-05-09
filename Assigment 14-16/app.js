//question no 1
// let studentNames = [];

//question no 2

// let studentNamesObj = new Array();

//question no 3

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

//question no 4

// let numbers = [10, 20, 30, 40, 50];

//question no 5

// let flags = [true, false, true, false];

//question no 6

// let mixedArray = ["Arhama", 25, true, null, "Student"];

//question 7

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3>Qualifications:</h3>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

//question no 8

// let students = ["Arhama", "Sara", "Alina"];
// let scores = [400, 350, 450];
// let totalMarks = 500;

// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write("Score of " + students[i] + " is " + scores[i] + 
//     ". Percentage: " + percentage + "%<br>");
// }
//question no 9

// let colors = ["Red", "Green", "Blue"];
// document.write("Initial Colors: " + colors + "<br>");

// a
// let addStart = prompt("Enter color to add at beginning:");
// colors.unshift(addStart);
// document.write("After adding at start: " + colors + "<br>");

// b
// let addEnd = prompt("Enter color to add at end:");
// colors.push(addEnd);
// document.write("After adding at end: " + colors + "<br>");

// c
// colors.unshift("Yellow", "Purple");
// document.write("After adding two colors at start: " + colors + "<br>");

// d
// colors.shift();
// document.write("After deleting first color: " + colors + "<br>");

// e
// colors.pop();
// document.write("After deleting last color: " + colors + "<br>");

// f
// let indexAdd = prompt("At which index to add color?");
// let colorName = prompt("Enter color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write("After adding at index: " + colors + "<br>");

// g
// let indexDel = prompt("At which index to delete?");
// let deleteCount = prompt("How many colors to delete?");
// colors.splice(indexDel, deleteCount);
// document.write("After deletion: " + colors + "<br>");

// question no 10

// let scores = [320, 230, 480, 120];

// document.write("Scores: " + scores + "<br>");

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("Sorted Scores: " + scores);

//question 11

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(0, 3);

// document.write("Cities: " + cities + "<br>");
// document.write("Selected Cities: " + selectedCities);

// question no 12

// let arr = ["This", "is", "my", "cat"];

// let result = arr.join(" ");
// document.write(result);