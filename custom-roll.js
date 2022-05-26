const prompt = require('prompt-sync')({ sigint: true });

let howManySides = Number(prompt("How many sides would you like on your die?: "))

let result = Math.round(Math.ceil(Math.random()*howManySides));
console.log(result)