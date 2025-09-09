//! Chapter 12 - 13

//? Ans 1

// var character = prompt("Enter a Chracter");
// if(character >= 48 && character <= 57){
//     alert("Number!");
// }
// else if(character >= 65 && character <= 90){
//     alert("Uppercase!")
// }
// else if(character >= 97 && character <= 122){
//     alert("Uppercase!")
// }
// else{
//     alert("Other")
// }

//? Ans 2

// var num1 = +prompt("Enter a num1");
// var num2 = +prompt("Enter a num2");

// if(num1 > num2){

//     if(num2 < num1){
//         console.log(num1);
//     }
// }
// else if(num1 < num2){
//     console.log(num2);
// }
// else if (num1 === num2){
//     alert("Equal")
// }

//? Ans 3

// var num = prompt("Enter a number to check positive or negative");
// if (num === ""){
//     alert("Please Fill This");
// }
// else if(num < 0){
//     document.write("Negative");
// }
// else if(num == 0){
//     document.write("Zero");
// }
// else if(num > 0){
//     document.write("Positive");
// }
// else{
//     alert("Please Enter a Valid Number")
// }

//? Ans 4

// var userInput = prompt("Enter a letter to check vowels or not");
// if (userInput.length === 1 && isNaN(userInput)) {
//     if (
//       userInput === "a" ||
//       userInput === "A" ||
//       userInput === "e" ||
//       userInput === "E" ||
//       userInput === "i" ||
//       userInput === "I" ||
//       userInput === "o" ||
//       userInput === "O" ||
//       userInput === "u" ||
//       userInput === "U"
//     ) {
//       document.write("True");
//     } 
//     else {
//       document.write("False");
//     }
//   } 
// else {
//   alert("Please Enter 1 Alphabet");
// }

//? Ans 5

// var newPassword = prompt("Enter a New Password")
// var confirmPassword = prompt("Enter a Confirm Password")

// if(newPassword === "" || confirmPassword === ""){
//     alert("Please Enter Your Password")
// }
// else if(newPassword === confirmPassword){
//     alert("Correct Password!")
// }
// else{
//     alert("Incorrect Password!")
// }


//? Ans 6

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting);

//? Ans 7

// var time = prompt("Enter a Time in 24 hours format");
// if(time >= "0000" && time <= "1159" ){
//     alert("Good Morning!")
// }
// else if(time >= "1200" && time <= "1659" ){
//     alert("Good Afternoon!")
// }
// else if(time >= "1700" && time <= "2059" ){
//     alert("Good Evening!")
// }
// else if(time >= "2100" && time <= "2359" ){
//     alert("Good Night!")
// }
// else{
//     alert("Enter a Valid Time")
// }