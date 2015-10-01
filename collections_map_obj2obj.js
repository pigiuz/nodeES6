'use strict'

let myNumbers = [0,1,2];
let myLetters = ["a","b","c"];

// with maps
// we can associate one object to another
let myMap = new Map();
myMap.set(myNumbers,myLetters);
// myMap.keys[0] === myNumbers

// with objects 
// we can associate NAMES to objects
let myObj = {};
myObj["myPropertyName"] = myLetters;
// there's no correlation between this.myNumbers and myObj["myPropertyName"]!!!