// Create function that return if the number is odd or even 

let checkFunc = (num) => num % 2 == 0 ? "even" : "odd"
console.log(checkFunc(6));

// Create function that returns the multiplication table for sepcific number 
// let multFunc = (num) => {
//     let multTable = [0,1,2,3,4,5,6,7,8,9,10,11,12]
//     let multArr = multTable.map((numTable) => {
//         return num * numTable
//     })
//     for (let i = 0; i < multArr.length; i++) {       
//         console.log(multArr[i]);
//     }
// }
// multFunc(5)

//***********************************************************************************************************************************//

// create a function that returns the indeices of the two number in array which their summtion equal to the total_number variable 
// Couldnt solve it

//************************************************************************************************************************************//

// Create a function that returns true if the first array can be nested inside the second array 
// let arrFunc = (arr1,arr2) => {
//     if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) > Math.max(...arr2)) ) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(arrFunc([1,2,3,4],[5,6,7,8,9]));

//***************************************************************************************************************************************//


// what is the output of
// console.log( "A" - "B" + 3 )
// console.log( "A" - "B" + "3")
// And explian your answer

// Answer : using (-) operator with two strings gives the value NAN , and NAN plus a number gives us a NAN
// but adding NAN with a string gives us a string of both

//**************************************************************************************************************************************//


// ** what is the output of 
// console.log( []  == [] )
// console.log( {} == {} )
// And explain your answer

// answer : arrays and objects are object type and object type is creted in memory by refernce
// so every new array or object is created in new memory location and are not equal

//************************************************************************************************************************************//


// what is the output of this code with explaination
// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();

// output is "A" then "C" then "B" , because setTimeout is Async function and get handled by diffrent API in the brwoser
// and javascript is a non-blocking langauge it dosent wait for Async functions


