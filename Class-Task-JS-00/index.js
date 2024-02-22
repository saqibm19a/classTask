// TASK 01

// let userNumber = +prompt("enter any number"); 
// let numberString = userNumber.toString();
// let stringLength = numberString.length;
// let sum = 0;

// for(let i = 0; i < stringLength; i++) {
//     sum += Number(numberString[i]);
// }

// console.log(sum);

// ************************************************************************

// TASK 02

// let userNumber1 = +prompt("enter number 1"); 
// let userNumber2 = +prompt("enter number 2");
// let sum = 0;

// for(let i = userNumber1; i <= userNumber2; i++) {
//    sum += i 
// }

// console.log(sum);

// ***************************************************************************

// TASK 03

// let givenArray = [15, 30, 42, 25];
// let sum = 0;
// let average = 0;

// for(let i = 0; i < givenArray.length; i++) {
//     sum += givenArray[i];
// }

// average = sum / givenArray.length;

// console.log(average);

// *******************************************************************************

// TASK 04

// let userString1 = prompt("Enter a word");
// let userString2 = prompt("Enter a word");

// if (userString1.length === userString2.length) {
//     console.log(`${userString1} and ${userString2} is equal`);
// } else {
//     console.log(`${userString1} and ${userString2} is not equal`);
// }

// *********************************************************************************

// TASK 05

let userString = prompt("Enter anything prohibited");

let firstCharacter = userString[0];
let lastCharacter = userString[userString.length - 1];
let middleCharacter = userString.slice([1], userString.length - 1);

let wholeReplace = lastCharacter + middleCharacter + firstCharacter;

console.log(wholeReplace);