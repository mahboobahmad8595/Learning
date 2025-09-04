//! Array


//! Create Array
// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits);



//! Terms
// 1. Elements       Apple Mango Banana
// 2. Indexing       0      1     2
// 3. Seperator      ,



//! Array Advantage
// var fruit1 = "Mango";
// var fruit2 = "Banana";
// var fruit3 = "Orange";
// var fruit4 = "Peach";
// var fruit5 = "Strawberry";

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(fruit4);
// console.log(fruit5);

// var fruits = ["Mango", "Banana" , "Strawberry" , "Peach" ,"Orange"];
// console.log(fruits);


//! Reference
// Array ka Reference(Location) Save hota he na ke value. jab ke deegar ki value save hoti he

// console.log("" === "");
// console.log(1 === 1);
// console.log(true === true);

// a = [] == 0.1 = reference 
// b = [] == 0.2 = reference

// var a = [];
// var b = [];
// console.log(a === b);     // False

// var a = [];
// var b = a;
// console.log(a === b);     // True

//! Any Data
// Array me kisi bhi qism ka data store karwa sakte hain

// var arr = [1 , "Two" , true , undefined , null , []];
// console.log(arr);



//! Call Specific
// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits[0]);



//! Check Length
// var fruits = ["Apple" , "Mango" , "Banana"];
// console.log(fruits.length); // 3



//! Change Value / Reinitialize
// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits[0] = "Orange"; 
// console.log(fruits);



//! Add
// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits[3] = "Orange";
// console.log(fruits);

// var pets = [];
// pets[0] = "Dogs";
// pets[1] = "Cats";
// pets[10] = "Birds"       // Empty * 8
// console.log(pets);

//! Methods
// 1. .unshift()    → array ke start me value add karta hai.
// 2. .shift()      → array ke start se value remove karta hai. aur return bhi karta he
// 3. .push()       → array ke end me new value add karta hai.
// 4. .pop()        → array ke end se last value remove karta hai. aur return bhi karta he
// 5. .splice()     → array ke andar kahin bhi value add & remove karta he.
// 6. .slice()      → array ki copy bnata ha.



//! 1. Unshift
// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.unshift("Orange");
// console.log(fruits);



//! 2. Shift
// var fruits = ["Apple" , "Mango" , "Banana"];
// var remove = fruits.shift();                     // Remove & Return 
// console.log(fruits);
// console.log(remove);



//! 3. Push
// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.push("Orange");
// console.log(fruits);



//! 4. Pop
// var fruits = ["Apple" , "Mango" , "Banana"];
// var remove = fruits.pop();                        // Remove & Return
// console.log(fruits);
// console.log(remove);



//! 5. Splice
// Syntax : var.splice[ StartIndex , Delete Count , Items Add ];

//? Add

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,0,"Orange");
// console.log(fruits);

//? Remove

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,1);
// console.log(fruits);

//? Add + Remove

// var fruits = ["Apple" , "Mango" , "Banana"];
// fruits.splice(1,1,"Orange");
// console.log(fruits);



//! 6. Slice
// Syntax : var.splice[ Start Index , End Index ];

// var fruits = ["Apple" , "Mango" , "Banana" , "Orange"];
// console.log(fruits.slice(1,3));

// var cars = ["Supra" , "Rolls Royce" , "Grande" , "BMW" , "Mehran"];
// var lastTwoCars = cars.slice(-2);
// console.log(lastTwoCars);
// console.log(cars);

// var copyArr = cars.slice(0);
// console.log(copyArr);