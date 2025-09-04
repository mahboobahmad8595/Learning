//! Chapter 01

//? Ans 1

// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//? Ans 2

// var num1 = 3;
// var num2 = 5;
// var subtract = num1 - num2;
// document.write("Subtract of " + num1 + " and " + num2 + " is " + subtract);

// var num1 = 3;
// var num2 = 5;
// var multiply = num1 * num2;
// document.write("Multiply of " + num1 + " and " + num2 + " is " + multiply);

// var num1 = 3;
// var num2 = 5;
// var divide = num1 / num2;
// document.write("Divide of " + num1 + " and " + num2 + " is " + divide);

// var num1 = 3;
// var num2 = 5;
// var modulus = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

//? Ans 3

// var num;
// document.write("Value after variable declaration is " + typeof(num) + "<br />");
// num = 5;
// document.write("Initial value: " + num + "<br />");
// document.write("Value after increment is: " + ++num + "<br />");
// num += 7;
// document.write("Value after addition is: " + num + "<br />");
// document.write("Value after decrement is: " + --num + "<br />");
// num %= 3;
// document.write("The Remainder is:" + num)

//? Ans 4

// var ticketPrice = 600;
// var tickets = 5;
// document.write("Total Cost to buy " + tickets + "ticketes to a movie is " + ticketPrice * tickets + " PKR");

//? Ans 5

// var a = 4;
// var b = 1;
// var c = 1;
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++ + "<br />");
// document.write(a + " * " + b++ + " = " + a*c++);

//? Ans 6

// Kaam nahi aya

//? Ans 7

// var item1 = 650;
// var item2 = 100;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;
// var shippingCharges = 100;

// document.write("Price of Item 1 is " + item1 + "<br />")m;
// document.write("Quantity of Item 1 is " + quantityOfItem1 + "<br />");
// document.write("Price of Item 2 is " + item2 + "<br />");
// document.write("Quantity of Item 2 is " + quantityOfItem2 + "<br />");
// document.write("Shipping Charges " + shippingCharges + "<br /> <br />");
// document.write("Total Cost of Your Order is " + ((item1 * quantityOfItem1) + (item2 * quantityOfItem2) + shippingCharges));

//? Ans 8

// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = 804 / 980 * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br />");
// document.write("Marks obtained: " + obtainedMarks + "<br />");
// document.write("Percentage: " + percentage);

//? Ans 9

// var riyalRate = 28;         // PKR
// var dollarRate = 104.80;    // PKR
// var riyal = 25;
// var dollar = 10;
// document.write("<h1> Currency in PKR </h1>")
// document.write("Total Currency in PKR: " + (riyal * riyalRate + dollar * dollarRate))

//? Ans 10

// var num = 10;
// document.write(num + 10 * 10 / 2);

//? Ans 11

// var currentYear = 2016;
// var birthYear = 1992;
// var age= currentYear - birthYear;
// document.write("<h1> Age Calculator </h1>")
// document.write("Current Year: " + currentYear + "<br />");
// document.write("Birth Year: " + birthYear + "<br />");
// document.write("Your Age is: " + age);

//? Ans 12

// samjh nahi aya

//? Ans 13

// var snack = "chocolate chip";
// var currentAge = 15;
// var maximumAge = 65;
// var perDay = 3;
// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("Favorite Snack: " + snack + "<br />");
// document.write("Current Age: " + currentAge + "<br />");
// document.write("Estimated Maximum Age: " + maximumAge + "<br />");
// document.write("You will need " + ( ((maximumAge - currentAge) * perDay) + " " + snack) + " to last you until the ripe old age of " + maximumAge);

//! Chapter 02

//? Ans 1

// var a = 10;
// document.write("Result:" + "<br />");
// document.write("The value of a is:" + a + "<br />");
// document.write("...................................." + "<br /> <br />");
// document.write("The value of ++a is: " + ++a + "<br />");
// document.write("Now the value of a is: " + a + "<br /> <br />");
// document.write("The the value of a++ is: " + a++ + "<br />");
// document.write("The the value of a is: " + a + " <br /> <br />");
// document.write("The the value of --a is: " + --a + "<br />");
// document.write("Now the the value of a is: " + a + "<br /> <br />");
// document.write("The Value of a-- is: " + a-- + "<br />");
// document.write("Now the Value of a is: " + a);

//? Ans 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;             // 1 - 0 + 1 + 1 = 2 
// document.write("a is: " + a + "<br />");
// document.write("b is: " + b + "<br />");
// document.write("result is: " + result);

//? Ans 3

// var userName = prompt("Enter Your Name");
// var greet = "Hello Sir ";
// alert(greet + userName + " !");

//? Ans 4


// var a = prompt("Enter a number for table");
// var b = 1;
// var c = 1;

// if(a == 0){
//     a = 5;
// }

// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);

//? Ans 5 

// var english = +prompt("Enter Your English Marks");
// var math = +prompt("Enter Your Math Marks");
// var urdu = +prompt("Enter Your Urdu Marks");
// var subMarks = 100;
// var totalMarks = 300;
// var totalObtained = english + math + urdu;
// var totalPercentage = totalObtained / totalMarks * 100;

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");
// document.write("English " + subMarks + " " + english + " " + english / subMarks * 100 + "%" +"<br />");
// document.write("Math " + subMarks + " " + math + " " + math / subMarks * 100 + "%" + "<br />");
// document.write("Urdu " + subMarks + " " + urdu + " " + urdu / subMarks * 100 + "%" + "<br />");
// document.write("Total " + totalMarks + " " + totalObtained + " " + totalPercentage + "%");

//! Chapter 03

//? Ans 1

// var city = "Karachi";
// var userInput = prompt("Enter Your City Karachi or else");
// if(userInput === "Karachi" || userInput === "karachi"){
//     alert("Welcome to city of lights");
// }

//? Ans 2

// var gender = prompt("Enter Your Gender Male or Female");
// if(gender === "Male" || gender === "male"){
//     alert("Good Morning Sir");
// }
// else if(gender === "Female" || gender === "female"){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Enter a Valid Gender");
// }

//? Ans 3

// var color = prompt("Enter a Color of Trafic Signal Light");
// if(color === "Red" || color === "red"){
//     alert("Must Stop");
// }
// else if(color === "Yellow" || color === "yellow"){
//     alert("Ready to move");
// }
// else if(color === "Green" || color === "green"){
//     alert("Move Now")
// }
// else{
//     alert("Enter a Valid Color")
// }

//? Ans 4

// var fuel = prompt("Enter a current fuel in your car");
// if(fuel < 0.25){
//     alert("Please refil the fuel in your car")
// }

//? Ans 5

//? Ans 6

// var english = +prompt("Enter Your English Marks");
// var math = +prompt("Enter Your Math Marks");
// var urdu = +prompt("Enter Your Urdu Marks");
// var totalMarks = 300;
// var totalObtained = english + math + urdu ;
// var totalPercentage = totalObtained / totalMarks * 100;
// var grade;
// var remarks;

// if(totalPercentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(totalPercentage >= 70){
//     grade = "A";
//     remarks = "Good"; 
// }
// else if(totalPercentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if(totalPercentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>" + "<br />");
// document.write("Total marks : " + totalMarks + "<br />");
// document.write("Marks obtained : " + totalObtained + "<br />");
// document.write("Percentage : " + totalPercentage + "<br />");
// document.write("Grade : " + grade + "<br />");
// document.write("Remarks : " + remarks);

//? Ans 7

// var secretNum = 4;
// var close = 4 + 1;
// var userInput = prompt("Guess a secret number between 1 to 10");

// if(userInput == secretNum){
//     alert("Bingo! Correct answer");
// }
// else if(userInput == close){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Sorry! Try Again");
// }

