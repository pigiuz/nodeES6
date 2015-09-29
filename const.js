'use strict'

function cannotAccessFromOuterScope(){
	{
		const i = 1;
		console.log(i);
	}
	console.log(i); // this throws a ReferenceError: i is not defined
}


function cannotChangeReference(){
	const i = 0;
	i = 1; // this throws a TypeError: Assignment to constant variable
}


function canChangeReferencedValue(){
	const i = ["this","is"];
	i.push("possible");
	console.log(i.join(" "));
}

cannotAccessFromOuterScope();
cannotChangeReference();
canChangeReferencedValue();