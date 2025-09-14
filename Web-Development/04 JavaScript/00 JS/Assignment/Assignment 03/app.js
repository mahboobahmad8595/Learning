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

//! Chapter 13 - 15

//? Ans 1

// var students = [];

//? Ans 2

// var students {};

//? Ans 3

// var students = ["Mahboob" , "Ahmad" , "Ali"]

//? Ans 4

// var students = [1 , 2 , 3]

//? Ans 5

// var students = [true , false]

//? Ans 6

// var students = ["Mahboob" , 1 , true , null , undefined]

//? Ans 7

// var qualifications = ["SSC", "HSC", "BCS" , "BS" , "BCOM" , "MS" , "M. Phil" , "PhD"]
// document.write("<h1> Qualifications </h1>")
// document.write("1) " + qualifications[0] + "<br />")
// document.write("2) " + qualifications[1] + "<br />")
// document.write("3) " + qualifications[2] + "<br />")
// document.write("4) " + qualifications[3] + "<br />")
// document.write("5) " + qualifications[4] + "<br />")
// document.write("6) " + qualifications[5] + "<br />")
// document.write("7) " + qualifications[6] + "<br />")
// document.write("8) " + qualifications[7] + "<br />")

//? Ans 8

// var students = ["Mahboob" , "Ahmad" , "Ali"]
// var scores = [320 , 230 , 480]
// var percentage = ["64%" , "46%" , "96%"]
// document.write("Score of " + students[0] + " is " + scores[0] + " . Percentage:" + percentage[0] + "<br />")
// document.write("Score of " + students[1] + " is " + scores[1] + " . Percentage:" + percentage[1] + "<br />")
// document.write("Score of " + students[2] + " is " + scores[2] + " . Percentage:" + percentage[2] + "<br />")

//? Ans 9

// var colors = ["Red" , "Green" , "Blue"]
// document.write(colors + "<br />")

// colors.unshift("Yellow")            // Shuru me color add
// document.write(colors + "<br />")

// colors.push("Orange")               // End me color add
// document.write(colors + "<br />")

// colors.unshift("Purple" , "Pink")
// document.write(colors + "<br />")

// colors.shift()
// document.write(colors + "<br />")

// colors.pop()
// document.write(colors + "<br />")

// colors.splice(2,0,"White")
// document.write(colors + "<br />")

// colors.splice(2,2,)
// document.write(colors + "<br />")


//? Ans 10 ??

// var scores = [320 , 230 , 480 , 120] 
// document.write("Scores of Students : " + scores + "<br />")

// scores = [120 , 230 , 320 , 480] 
// document.write("Ordered Scores of Students : " + scores)

//? Ans 11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// document.write("Cities List : <br />" + cities + "<br />" )

// var selectedCities = cities.slice(2,4)
// document.write("Selected Cities List : <br />" + selectedCities  )

//? Ans 12 ??

// var arr = ["This" + "is" + "my" + "cat"];
// document.write("Array : <br />" + arr + "<br />")

// var string = arr[0] + arr[1] + arr[2] + arr[3] 
// document.write("String : <br />" + string)

//? Ans 13 ??

// var devices = ["Keyborad", "Mouse" , "Pointer" , "Monitor"]

// devices[0] = "Keyborad";
// devices[1] = "Mouse";
// devices[2] = "Pointer";
// devices[3] = "Monitor";
// document.write("Devices : <br />" + devices + "<br /> <br />")
// document.write("Out: <br />" + devices[0] + "<br />")
// document.write("Out: <br />" + devices[1] + "<br />")
// document.write("Out: <br />" + devices[2] + "<br />")
// document.write("Out: <br />" + devices[3] + "<br />")

//? Ans 14 ?? 

// var devices = ["Keyborad", "Mouse" , "Pointer" , "Monitor"]

// devices[0] = "Keyborad";
// devices[1] = "Mouse";
// devices[2] = "Pointer";
// devices[3] = "Monitor";
// document.write("Devices : <br />" + devices + "<br /> <br />")
// document.write("Out: <br />" + devices[0] + "<br />")
// document.write("Out: <br />" + devices[1] + "<br />")
// document.write("Out: <br />" + devices[2] + "<br />")
// document.write("Out: <br />" + devices[3] + "<br />")

//? Ans 15 ??

// var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// document.write(mobile)

//! Note

// 10 , 12 , 13 , 14 ,15 //? Samjh Nahi aye