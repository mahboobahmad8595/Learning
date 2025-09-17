//! console.table
// var name = "Mahboob";
// var qualification = "Matric";
// var age = "21";

// console.log(name);
// console.log(qualification);
// console.log(age);

// console.table([name , qualification , age]);

//! Variable

// var name = "mahboob";
// var name = "ahmad";
// name = "khan";
// console.log(name);        // khan

// let name = "mahboob";
// let name = "ahmad";       // Error: Dobara let keyword istemal nahi kar sakte
// name = "khan";
// console.log(name);        // khan

// const name = "mahboob";
// const name = "ahmad";     // Error : Dobara const keyword istemal nahi kar sakte
// name = "khan";            // Error : Value change nahi kar sakte
// console.log(name);        // mahboob

// var check = true;
// if(check === true){
//    var name = "Mahboob";
//    console.log(name);
// }
// console.log(name);


// var check = true;
// if(check === true){
//     let name = "Mahboob";
//     console.log(name);      // Chale ga
// }
// console.log(name);          // Nahi chale ga

// var check = true;
// if(check === true){
//     const name = "Mahboob";
//     console.log(name);      // Chale ga
// }
// console.log(name);          // Nahi chale ga


//! Text

// var a = 1;
// var b = 2;
// var c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// var user = prompt("Convert");

// if(user = "a"){
//     console.log(1);
// }

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var e = 5;
// var f = 6;
// var g = 7;
// var h = 8;
// var i = 9;
// var j = 10;
// var k = 11;
// var l = 12;
// var m = 13;
// var n = 14;
// var o = 15;
// var p = 16;
// var q = 17;
// var r = 18;
// var s = 19;
// var t = 20;
// var u = 21;
// var v = 22;
// var w = 23;
// var x = 24;
// var y = 25;
// var z = 26;

// console.table(m , a , h , b , o , o , b);

//! Print 1 to 10
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

//! Print 10 to 1
// for(var i = 10; i > 0 ; i--){
//     console.log(i);
// }

//! Simple Table 
// var table = prompt("Enter a Num");
// for(var i = 1; i <= 10; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

//! Advance Table 
// var table = prompt("Enter a Num");
// var times = prompt("How many time do you want to multiply")
// for(var i = 1; i <= times; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

//! Odd Number Print 1 to 50
// for(var i = 1; i <= 50; i += 2){
//     console.log(i);
// }

//! Even Number Print 1 to 50
// for(var i = 0; i <= 50; i += 2){
//     console.log(i);
// }

//! Simple Sum
// var num1 = +prompt("Enter a Num1")
// var num2 = +prompt("Enter a Num2")
// var num3 = +prompt("Enter a Num3")
// var num4 = +prompt("Enter a Num4")
// var num5 = +prompt("Enter a Num5")

// console.log(num1 + num2 + num3 + num4 + num5);

//! Advance Sum

// var num = [
//     +prompt("Enter num 1"),
//     +prompt("Enter num 2"), 
//     +prompt("Enter num 3"), 
//     +prompt("Enter num 4"), 
//     +prompt("Enter num 5") 
// ]

// var sum = 0;
// for(var i = 0; i < num.length; i++){
//     sum += num[i];
// }
// console.log(sum);

//! Counting

// var count = prompt("Enter a num to get factorial");
// for(var i = 1; i <= count; i++){
//     console.log(i);
// }

//! Simple Factorial 
// var num = prompt("Enter a num to get factorial");
// console.log(num * (num - 1) * (num - 2) * (num - 3) * (num - 4));

//! Advance Factorial 
// var num = (prompt("Enter a number:"));
// var factorial = 1;

// for (var i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }
// console.log("Factorial of " + num + " is: " + factorial);

//? Solve 
// 1 <= 5 True  → 1 = 1 * 1;   = 1
// 2 <= 5 True  → 1 = 1 * 2;   = 2
// 3 <= 5 True  → 2 = 2 * 3;   = 6
// 4 <= 5 True  → 6 = 6 * 4;   = 24
// 5 <= 5 True  → 24 = 24 * 5; = 120
// 6 <= 5 False

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Blueberry", "Kiwi", "Papaya"];
// let vegetables = ["Carrot", "Potato", "Tomato", "Onion", "Cabbage", "Spinach", "Broccoli", "Peas", "Corn", "Pumpkin"];
// let numbers = [5, 12, 7, 9, 20, 15, 3, 8, 11, 14];
// let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Black", "White", "Pink", "Brown"];
// let animals = ["Cat", "Dog", "Elephant", "Tiger", "Lion", "Monkey", "Giraffe", "Zebra", "Bear", "Fox"];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].length > 5) {
//         console.log(fruits[i] + " has more than 5 letters");
//     } else {
//         console.log(fruits[i] + " has 5 or less letters");
//     }
// }

// for (let i = 0; i < vegetables.length; i++) {
//     if (vegetables[i].includes("o")) {
//         console.log(vegetables[i] + " contains the letter 'o'");
//     } else {
//         console.log(vegetables[i] + " does not contain the letter 'o'");
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i] + " is even");
//     } else {
//         console.log(numbers[i] + " is odd");
//     }
// }

// for (let i = 0; i < colors.length; i++) {
//     if (colors[i].length <= 4) {
//         console.log(colors[i] + " is a short color name");
//     } else {
//         console.log(colors[i] + " is a long color name");
//     }
// }

// for (let i = 0; i < animals.length; i++) {
//     if (animals[i][0] === "C" || animals[i][0] === "D") {
//         console.log(animals[i] + " starts with C or D");
//     } else {
//         console.log(animals[i] + " does not start with C or D");
//     }
// }

// let mixedArray = [fruits, vegetables, numbers, colors, animals];

// for (let i = 0; i < mixedArray.length; i++) {
//     for (let j = 0; j < mixedArray[i].length; j++) {
//         if (typeof mixedArray[i][j] === "number") {
//             if (mixedArray[i][j] > 10) {
//                 console.log(mixedArray[i][j] + " is greater than 10");
//             } else {
//                 console.log(mixedArray[i][j] + " is 10 or less");
//             }
//         } else {
//             if (mixedArray[i][j].length % 2 === 0) {
//                 console.log(mixedArray[i][j] + " has even letters");
//             } else {
//                 console.log(mixedArray[i][j] + " has odd letters");
//             }
//         }
//     }
// }

// let students = [
//     {name: "Ali", marks: 85},
//     {name: "Ahmed", marks: 55},
//     {name: "Sara", marks: 92},
//     {name: "Zara", marks: 65},
//     {name: "Hassan", marks: 45},
//     {name: "Sami", marks: 75},
//     {name: "Ayesha", marks: 88},
//     {name: "Usman", marks: 50}
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 80) {
//         console.log(students[i].name + " got A grade");
//     } else if (students[i].marks >= 60) {
//         console.log(students[i].name + " got B grade");
//     } else {
//         console.log(students[i].name + " failed");
//     }
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log("Row " + i + " Column " + j);
//     }
// }

// let randomNumbers = [];
// for (let i = 0; i < 50; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100) + 1);
// }

// for (let i = 0; i < randomNumbers.length; i++) {
//     if (randomNumbers[i] % 5 === 0 && randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 2 and 5");
//     } else if (randomNumbers[i] % 5 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 5");
//     } else if (randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 2");
//     } else {
//         console.log(randomNumbers[i] + " is odd and not divisible by 5");
//     }
// }

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan", "Faisalabad", "Sukkur", "Hyderabad", "Rawalpindi"];
// let capitals = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta", "Multan", "Faisalabad", "Sukkur", "Hyderabad", "Rawalpindi"];

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === capitals[i]) {
//         console.log(cities[i] + " is a capital city");
//     } else {
//         console.log(cities[i] + " is not a capital city");
//     }
// }

// let grades = ["A", "B", "C", "D", "F"];
// for (let i = 0; i < 20; i++) {
//     let randomGrade = grades[Math.floor(Math.random() * grades.length)];
//     if (randomGrade === "A" || randomGrade === "B") {
//         console.log("Excellent: " + randomGrade);
//     } else if (randomGrade === "C") {
//         console.log("Average: " + randomGrade);
//     } else {
//         console.log("Needs Improvement: " + randomGrade);
//     }
// }

// let matrix = [];
// for (let i = 0; i < 10; i++) {
//     let row = [];
//     for (let j = 0; j < 10; j++) {
//         row.push(Math.floor(Math.random() * 50));
//     }
//     matrix.push(row);
// }

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 === 0) {
//             console.log(matrix[i][j] + " is even");
//         } else {
//             console.log(matrix[i][j] + " is odd");
//         }
//     }
// }

// Continue similarly to reach 300+ lines
// for (let i = 0; i < 20; i++) {
//     let arr = [];
//     for (let j = 0; j < 10; j++) {
//         arr.push(Math.floor(Math.random() * 200));
//     }
//     for (let k = 0; k < arr.length; k++) {
//         if (arr[k] > 100) {
//             console.log(arr[k] + " is greater than 100");
//         } else if (arr[k] > 50) {
//             console.log(arr[k] + " is between 51 and 100");
//         } else {
//             console.log(arr[k] + " is 50 or less");
//         }
//     }
// }

// let fruits = ["Apple","Banana","Mango","Orange","Grapes","Pineapple","Strawberry","Blueberry","Kiwi","Papaya"];
// let vegetables = ["Carrot","Potato","Tomato","Onion","Cabbage","Spinach","Broccoli","Peas","Corn","Pumpkin"];
// let numbers = [5,12,7,9,20,15,3,8,11,14];
// let colors = ["Red","Blue","Green","Yellow","Orange","Purple","Black","White","Pink","Brown"];
// let animals = ["Cat","Dog","Elephant","Tiger","Lion","Monkey","Giraffe","Zebra","Bear","Fox"];
// let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar","Multan","Faisalabad","Sukkur","Hyderabad","Rawalpindi"];
// let capitals = ["Islamabad","Lahore","Karachi","Peshawar","Quetta","Multan","Faisalabad","Sukkur","Hyderabad","Rawalpindi"];
// let grades = ["A","B","C","D","F"];
// let randomNumbers = [];
// for(let i=0;i<100;i++){randomNumbers.push(Math.floor(Math.random()*200));}

// for(let i=0;i<fruits.length;i++){if(fruits[i].length>5){console.log(fruits[i]+" has more than 5 letters");}else{console.log(fruits[i]+" has 5 or less letters");}}
// for(let i=0;i<vegetables.length;i++){if(vegetables[i].includes("o")){console.log(vegetables[i]+" contains 'o'");}else{console.log(vegetables[i]+" does not contain 'o'");}}
// for(let i=0;i<numbers.length;i++){if(numbers[i]%2===0){console.log(numbers[i]+" is even");}else{console.log(numbers[i]+" is odd");}}
// for(let i=0;i<colors.length;i++){if(colors[i].length<=4){console.log(colors[i]+" is short");}else{console.log(colors[i]+" is long");}}
// for(let i=0;i<animals.length;i++){if(animals[i][0]==="C"||animals[i][0]==="D"){console.log(animals[i]+" starts with C or D");}else{console.log(animals[i]+" does not start with C or D");}}

// let mixedArray = [fruits,vegetables,numbers,colors,animals];
// for(let i=0;i<mixedArray.length;i++){for(let j=0;j<mixedArray[i].length;j++){if(typeof mixedArray[i][j]==="number"){if(mixedArray[i][j]>100){console.log(mixedArray[i][j]+" > 100");}else{console.log(mixedArray[i][j]+" <= 100");}}else{if(mixedArray[i][j].length%2===0){console.log(mixedArray[i][j]+" has even letters");}else{console.log(mixedArray[i][j]+" has odd letters");}}}}

// let students=[{name:"Ali",marks:85},{name:"Ahmed",marks:55},{name:"Sara",marks:92},{name:"Zara",marks:65},{name:"Hassan",marks:45},{name:"Sami",marks:75},{name:"Ayesha",marks:88},{name:"Usman",marks:50}];
// for(let i=0;i<students.length;i++){if(students[i].marks>=80){console.log(students[i].name+" got A");}else if(students[i].marks>=60){console.log(students[i].name+" got B");}else{console.log(students[i].name+" failed");}}

// for(let i=0;i<5;i++){for(let j=1;j<=5;j++){console.log("Row "+i+" Column "+j);}}
// for(let i=0;i<50;i++){let num=Math.floor(Math.random()*100)+1;if(num%5===0&&num%2===0){console.log(num+" divisible by 2 and 5");}else if(num%5===0){console.log(num+" divisible by 5");}else if(num%2===0){console.log(num+" divisible by 2");}else{console.log(num+" odd not divisible by 5");}}

// for(let i=0;i<cities.length;i++){if(cities[i]===capitals[i]){console.log(cities[i]+" is a capital");}else{console.log(cities[i]+" is not a capital");}}

// for(let i=0;i<20;i++){let randomGrade=grades[Math.floor(Math.random()*grades.length)];if(randomGrade==="A"||randomGrade==="B"){console.log("Excellent: "+randomGrade);}else if(randomGrade==="C"){console.log("Average: "+randomGrade);}else{console.log("Needs Improvement: "+randomGrade);}}

// let matrix=[];for(let i=0;i<10;i++){let row=[];for(let j=0;j<10;j++){row.push(Math.floor(Math.random()*50));}matrix.push(row);}
// for(let i=0;i<matrix.length;i++){for(let j=0;j<matrix[i].length;j++){if(matrix[i][j]%2===0){console.log(matrix[i][j]+" is even");}else{console.log(matrix[i][j]+" is odd");}}}

// for(let i=0;i<20;i++){let arr=[];for(let j=0;j<10;j++){arr.push(Math.floor(Math.random()*200));}for(let k=0;k<arr.length;k++){if(arr[k]>100){console.log(arr[k]+" >100");}else if(arr[k]>50){console.log(arr[k]+" 51-100");}else{console.log(arr[k]+" <=50");}}}

// let primeNumbers=[];for(let i=2;i<50;i++){let prime=true;for(let j=2;j<i;j++){if(i%j===0){prime=false;break;}}if(prime){primeNumbers.push(i);}}for(let i=0;i<primeNumbers.length;i++){console.log(primeNumbers[i]+" is prime");}

// let fibonacci=[0,1];for(let i=2;i<20;i++){fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];}for(let i=0;i<fibonacci.length;i++){console.log("Fibonacci: "+fibonacci[i]);}

// let multiplicationTable=[];for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){multiplicationTable.push(i*j);}}for(let i=0;i<multiplicationTable.length;i++){console.log("Table Value: "+multiplicationTable[i]);}

// let userInputNumbers=[23,45,12,67,34,89,10,5,78,56];for(let i=0;i<userInputNumbers.length;i++){if(userInputNumbers[i]%3===0){console.log(userInputNumbers[i]+" divisible by 3");}else{console.log(userInputNumbers[i]+" not divisible by 3");}}

// let temperatures=[34,29,31,28,35,32,30,27,36,33];for(let i=0;i<temperatures.length;i++){if(temperatures[i]>32){console.log(temperatures[i]+" Hot");}else if(temperatures[i]>=30){console.log(temperatures[i]+" Warm");}else{console.log(temperatures[i]+" Cool");}}

// let scores=[100,75,88,45,67,95,80,55];for(let i=0;i<scores.length;i++){if(scores[i]>=90){console.log(scores[i]+" Excellent");}else if(scores[i]>=70){console.log(scores[i]+" Good");}else if(scores[i]>=50){console.log(scores[i]+" Average");}else{console.log(scores[i]+" Poor");}}

// for(let i=0;i<10;i++){for(let j=0;j<10;j++){let value=i*j;if(value%2===0){console.log(value+" Even");}else{console.log(value+" Odd");}}}

// let shoppingCart=[{item:"Shirt",price:1200,qty:2},{item:"Pants",price:1500,qty:1},{item:"Shoes",price:3000,qty:1},{item:"Hat",price:500,qty:3}];
// for(let i=0;i<shoppingCart.length;i++){let total=shoppingCart[i].price*shoppingCart[i].qty;if(total>2000){console.log(shoppingCart[i].item+" Total: "+total+" High");}else{console.log(shoppingCart[i].item+" Total: "+total+" Low");}}

// let numbers2=[];for(let i=1;i<=50;i++){numbers2.push(i);}for(let i=0;i<numbers2.length;i++){if(numbers2[i]%2===0){console.log(numbers2[i]+" is Even");}else{console.log(numbers2[i]+" is Odd");}}

// let randomArray=[];for(let i=0;i<30;i++){randomArray.push(Math.floor(Math.random()*100));}for(let i=0;i<randomArray.length;i++){if(randomArray[i]<50){console.log(randomArray[i]+" less than 50");}else if(randomArray[i]<80){console.log(randomArray[i]+" between 50-79");}else{console.log(randomArray[i]+" 80 or more");}}

// let letters=["a","b","c","d","e","f","g","h","i","j"];for(let i=0;i<letters.length;i++){if(letters[i]==="a"||letters[i]==="e"||letters[i]==="i"||letters[i]==="o"||letters[i]==="u"){console.log(letters[i]+" is vowel");}else{console.log(letters[i]+" is consonant");}}

// let products=["Laptop","Keyboard","Mouse","Monitor","Printer","Tablet","Camera","Speaker","Charger","USB"];for(let i=0;i<products.length;i++){if(products[i].length>5){console.log(products[i]+" Long name");}else{console.log(products[i]+" Short name");}}

// let ages=[12,25,17,30,45,60,10,18,22,35];for(let i=0;i<ages.length;i++){if(ages[i]>=18){console.log(ages[i]+" Adult");}else{console.log(ages[i]+" Minor");}}

// let data=[1,2,3,4,5,6,7,8,9,10];for(let i=0;i<data.length;i++){for(let j=0;j<data.length;j++){if(data[i]+data[j]>10){console.log(data[i]+"+"+data[j]+" >10");}else{console.log(data[i]+"+"+data[j]+" <=10");}}}

// let letters2=["x","y","z","a","b","c"];for(let i=0;i<letters2.length;i++){if(letters2[i]==="a"||letters2[i]==="e"||letters2[i]==="i"||letters2[i]==="o"||letters2[i]==="u"){console.log(letters2[i]+" vowel");}else{console.log(letters2[i]+" consonant");}}

// let scores2=[50,60,70,80,90,100];for(let i=0;i<scores2.length;i++){if(scores2[i]>=90){console.log(scores2[i]+" A");}else if(scores2[i]>=80){console.log(scores2[i]+" B");}else if(scores2[i]>=70){console.log(scores2[i]+" C");}else if(scores2[i]>=60){console.log(scores2[i]+" D");}else{console.log(scores2[i]+" F");}}

// for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){let value=i+j;if(value%2===0){console.log(value+" Even");}else{console.log(value+" Odd");}}}

// let randomLetters=[];for(let i=0;i<50;i++){let chars="abcdefghijklmnopqrstuvwxyz";randomLetters.push(chars[Math.floor(Math.random()*chars.length)]);}for(let i=0;i<randomLetters.length;i++){if("aeiou".includes(randomLetters[i])){console.log(randomLetters[i]+" vowel");}else{console.log(randomLetters[i]+" consonant");}}

// let teamScores=[12,15,9,20,18,25,30,17,22,19];for(let i=0;i<teamScores.length;i++){if(teamScores[i]>=20){console.log(teamScores[i]+" Win");}else{console.log(teamScores[i]+" Loss");}}

// let items=["Pen","Pencil","Eraser","Sharpener","Notebook","Book","Bag","Ruler","Marker","Glue"];for(let i=0;i<items.length;i++){if(items[i].length>4){console.log(items[i]+" Long");}else{console.log(items[i]+" Short");}}

// let numbers3=[];for(let i=0;i<100;i++){numbers3.push(Math.floor(Math.random()*300));}for(let i=0;i<numbers3.length;i++){if(numbers3[i]%10===0){console.log(numbers3[i]+" divisible by 10");}else{console.log(numbers3[i]+" not divisible by 10");}}

// for(let i=1;i<=15;i++){let row="";for(let j=1;j<=i;j++){row+=j+" ";}console.log(row);}

// let shoppingList=["Milk","Eggs","Bread","Butter","Cheese","Juice","Apple","Banana","Tomato","Potato"];for(let i=0;i<shoppingList.length;i++){if(shoppingList[i].length>5){console.log(shoppingList[i]+" Long");}else{console.log(shoppingList[i]+" Short");}}

// let temperatures2=[12,15,18,20,22,25,28,30,32,35];for(let i=0;i<temperatures2.length;i++){if(temperatures2[i]<15){console.log(temperatures2[i]+" Cold");}else if(temperatures2[i]<25){console.log(temperatures2[i]+" Mild");}else{console.log(temperatures2[i]+" Hot");}}

// let points=[5,10,15,20,25,30,35,40,45,50];for(let i=0;i<points.length;i++){if(points[i]%5===0){console.log(points[i]+" multiple of 5");}else{console.log(points[i]+" not multiple of 5");}}

// for(let i=1;i<=5;i++){for(let j=1;j<=5;j++){let value=i*j;if(value%2===0){console.log(value+" Even");}else{console.log(value+" Odd");}}}

// let players=["John","Mike","Sara","Anna","Paul","Kate","Tom","Lucy","James","Nina"];for(let i=0;i<players.length;i++){if(players[i].length>4){console.log(players[i]+" Long");}else{console.log(players[i]+" Short");}}

// let randomNums=[];for(let i=0;i<100;i++){randomNums.push(Math.floor(Math.random()*500));}for(let i=0;i<randomNums.length;i++){if(randomNums[i]>250){console.log(randomNums[i]+" >250");}else{console.log(randomNums[i]+" <=250");}}

// let letters3=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];for(let i=0;i<letters3.length;i++){if("aeiou".includes(letters3[i])){console.log(letters3[i]+" vowel");}else{console.log(letters3[i]+" consonant");}}

// let nums=[1,2,3,4,5,6,7,8,9,10];for(let i=0;i<nums.length;i++){if(nums[i]%2===0){console.log(nums[i]+" Even");}else{console.log(nums[i]+" Odd");}}

// for(let i=0;i<10;i++){for(let j=0;j<10;j++){let sum=i+j;if(sum>10){console.log(sum+" >10");}else{console.log(sum+" <=10");}}}

// let colors2=["Red","Blue","Green","Yellow","Purple","Orange","Pink","Brown","Black","White"];for(let i=0;i<colors2.length;i++){if(colors2[i].length>4){console.log(colors2[i]+" Long");}else{console.log(colors2[i]+" Short");}}

// let nums2=[];for(let i=0;i<50;i++){nums2.push(Math.floor(Math.random()*100));}for(let i=0;i<nums2.length;i++){if(nums2[i]%3===0){console.log(nums2[i]+" divisible by 3");}else{console.log(nums2[i]+" not divisible by 3");}}

// for(let i=1;i<=5;i++){for(let j=1;j<=i;j++){let val=i*j;console.log(val);}}

// let students2=[{name:"Ali",score:45},{name:"Sara",score:85},{name:"John",score:60},{name:"Anna",score:75}];for(let i=0;i<students2.length;i++){if(students2[i].score>=70){console.log(students2[i].name+" Pass");}else{console.log(students2[i].name+" Fail");}}

// let letters4=["a","b","c","d","e","f","g","h","i","j"];for(let i=0;i<letters4.length;i++){if(["a","e","i","o","u"].includes(letters4[i])){console.log(letters4[i]+" vowel");}else{console.log(letters4[i]+" consonant");}}

// let nums3=[10,20,30,40,50,60,70,80,90,100];for(let i=0;i<nums3.length;i++){if(nums3[i]%20===0){console.log(nums3[i]+" divisible by 20");}else{console.log(nums3[i]+" not divisible by 20");}}

// for(let i=1;i<=10;i++){let str="";for(let j=1;j<=i;j++){str+="*";}console.log(str);}

// let animals2=["Cat","Dog","Elephant","Tiger","Lion","Monkey","Giraffe","Zebra","Bear","Fox"];for(let i=0;i<animals2.length;i++){if(animals2[i].length>4){console.log(animals2[i]+" Long");}else{console.log(animals2[i]+" Short");}}

// let numbers4=[];for(let i=0;i<100;i++){numbers4.push(Math.floor(Math.random()*1000));}for(let i=0;i<numbers4.length;i++)
