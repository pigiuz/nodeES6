'use strict'

function testVar(){
    for(var i=0;i<1;i++)
        console.log(i); // traces 0
    console.log(i); // traces 1
}

function testLet(){
	for(let i=0;i<1;i++)
        console.log(i); // traces 0
	console.log(i); // << this throws a ReferenceError: i is not defined
}

testVar();
testLet();