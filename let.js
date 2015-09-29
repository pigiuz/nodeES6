'use strict'
var fs = require("fs");

Array.prototype.last = function(){
    return this[this.length-1];
}

var lastLine = undefined;
if(lastLine === undefined){
    let myFile = fs.readFileSync(__dirname+"/let.js","utf8");
    lastLine = myFile.split("\n").last();
}
// console.log(lastLine); // try to declare myFile as a var and uncomment this line
console.log(myFile);
// I just wanted this line, but at least the rest of the file is NOT in memory!