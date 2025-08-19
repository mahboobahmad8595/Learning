//! Operators
// 1. Arithemetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Conditional Operators
// 6. Type Operators
// 7. Unary Operators

//! 1. Arithemetic Operators

// 1. Add                   5  + 5 = 5
// 2. Subtract              5  - 5 = 0
// 3. Multiply              5  * 5 = 25
// 4. Divide                10 / 5 = 2
// 5. Modulus (Remainder)   10 % 3 = 1
// 6. Exponent (Power)      2 ** 3 = 8
// 7. Increment             ++a , a++ 
// 8. Decrement             --a , a--

//? Increment & Decrement
// 1. Pre       Calculate → Print       ++a , --a          
// 2. Post      Print     → Calculate   a++ , a--

// Example
// var a = 10;
// var b = 10;
// var c = 10;
// var d = 10;
// console.log(++a);
// console.log(b++);
// console.log(--c);
// console.log(d--);

//? Precedence (PEMDAS & BODMAS)
// 1. ()   
// 2. **	             
// 3. * , / , %	         
// 4. + , -

//? Associativity in Math Operators
// Operators that have the same precedence are evaluated according to their associativity:

// L to R associativity:   + , - , * , /
// R to L associativity:   ** 

//? Practice

// var a = 2 + 2;
// var b = 2 ** 3 ** 2;
// var c = 2 + 2 * 6;
// var d = 2 * (2 + 6);
// var e = 6 / 2 + 2 ** (2 ** 2) + 2 * 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


//! Concatenating

// 1 String + String = String
// var a = "10";
// var b = "10";
// console.log(a + b);

// 2. Number + String = String 
// var a = 10;
// var b = "10";
// console.log(a + b);

// 3. Number -,*,/ String = Number
// var a = 10;
// var b = "10";
// console.log(a - b);


