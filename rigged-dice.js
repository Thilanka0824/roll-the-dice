const prompt = require('prompt-sync')({ sigint: true });

let riggedNumber = Number(prompt("What number do you want to rig: "))

let result = Math.ceil(Math.random()*7); //1-7


// rigged is 6
// 1 - 1/7
// 2 - 1/7
// 3 - 1/7
// 4 - 1/7
// 5 - 1/7
// 6 - 2/7


console.log("Actual roll: " + riggedNumber)
if(result === 7){
    console.log(riggedNumber);

} else {
    console.log(result)
} 


//let result = Math.round(Math.ceil(Math.random()*6));
//console.log(result)

// if (result === 1) {
//     console.log("1")
// } else if(result === 2 || riggedNumber === 2) {
//     console.log("2")
// } else if(result === 3) {
//     console.log("3")
// } else if(result === 4) {
//     console.log("4")
// } else if(result === 5) {
//     console.log("5")
// } else if(result === 6) {
//     console.log("6")
// } 

// if(result === 1 || riggedNumber === 1){
//     console.log("1")
// } else if(result === 2 || riggedNumber === 2) {
//     console.log("2")
// } else if(result === 3 || riggedNumber === 3) {
//     console.log("3")
// } else if(result === 4 || riggedNumber === 4) {
//     console.log("4")
// } else if(result === 5 || riggedNumber === 5) {
//     console.log("5")
// } else if(result === 6 || riggedNumber === 6) {
//     console.log("6")
// }


//=======Tylers======

// const prompt = require("prompt-sync")({ sigint: true });

// const riggedNumber = Number(prompt("Choose a number between 1 & 6: "))

// const rigged = (Math.floor(Math.random() * 6) === riggedNumber);

// if (riggedNumber < 7) {
//     if (rigged) {
//         console.log(riggedNumber);
//         console.log("RIGGED")
//     } else {
//         console.log(Math.floor(Math.random() * 6) + 1);
//     }
// } else {
//     console.log(riggedNumber);
// }

//=============Greyson=========
// .js
// const prompt = require('prompt-sync')({sigint: true});

// let rigged = Number(prompt("Enter the number you would like to rig (between 1 and 6): "));

// let roll = Math.ceil(Math.random()*7); //1-7

// /*
// //rigged is 6
// 1 = 1/7
// 2 = 1/7
// 3 = 1/7
// 4 = 1/7
// 5 = 1/7
// 6 = 2/7

// */

// console.log("Actual roll: " + roll);
// if (roll === 7){
//     console.log(rigged);
// } else {
//     console.log(roll);
// }