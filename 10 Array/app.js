//! Data

// 1. Primitive Data      : Single value , Complex nahi hota
// 2. Non-Primitive Data  : Multiples value , Complex hota hai

//! Non-Primitive Data

// 1. Object     
// 2. Array
// 3. Function

//!______________________{ Array} ___________________________\\


//! Create Create Array

// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits);

//! Terms

// 1. Elements       Apple Mango Banana
// 2. Indexing       0      1     2
// 3. Seperator      ,

//! Call Specific

// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits[0]);

//! Check Length

// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits.length); // 3

//! Change Value

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits[0] = "Orange"; 
// console.log(fruits);

//! Add

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits[3] = "Orange";
// console.log(fruits);

//! Methods

// 1. .unshift()    → array ke start me value add karta hai.
// 2. .shift()      → array ke start se value remove karta hai.
// 3. .push()       → array ke end me new value add karta hai.
// 4. .pop()        → array ke end se last value remove karta hai.
// 5. .splice()     → array ke andar kahin bhi value add & remove karta he.
// 6. .slice()      → array ki copy bnata ha.

//! 1. Unshift

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.unshift("Orange");
// console.log(fruits);

//! 2. Shift

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.shift();
// console.log(fruits);

//! 3. Push

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.push("Orange");
// console.log(fruits);

//! 4. Pop

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.pop();
// console.log(fruits);

//! 5. Splice

// Syntax : var.splice[ StartIndex , Remove , Items Add ];

// Add

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,0,"Orange");
// console.log(fruits);

// Remove

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,1);
// console.log(fruits);

// Add & Remove

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,1,"Orange");
// console.log(fruits);

//! 6. Slice

// Syntax : var.splice[ Start Index , End Index ];

// var fruits = ["Apple" , "Mango" , "Banana" , "Orange"];
// console.log(fruits.slice(1,3));