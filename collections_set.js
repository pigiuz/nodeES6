'use strict'

// with an array
let array = [];

function addToArray(value){
	if(array.indexOf(value) != -1){ // << linear search
		array.push(value);
	}
}

// with an object
let object = Object.create({});
let size = 0;
function addToObject(value){
	let found = false;
	for(let propname in object){ // << another linear search
		if(object[propname] === value){
			found=true;
			break;
		}
	}
	if(!found){
		object["property_"+size] = value; // some_name should be generated in some way
		size++;
	}
}

// with a set
let mySet = new Set();

function addToSet(value){
	mySet.add(value);
}


function benchmark(dataStructureName,times, elements, addFunction, clearFunction){
	for(let t=0;t<times;t++){
		console.time('adding '+elements+' elements to '+dataStructureName);
		for (let i = 0; i < elements; i++) {
			addFunction(i);
		}
		console.timeEnd('adding '+elements+' elements to '+dataStructureName);
		clearFunction();
	}
}


function defaultTo(propertyName,defaultValue){
	console.log(propertyName+" defaulted to "+defaultValue);
	console.log("run: node "+__filename+" <elements> <iterations>");
	return defaultValue;
}

let elements = process.argv.length>2? process.argv[2] : defaultTo("elements",1000);
let iterations = process.argv.length>3? process.argv[3] : defaultTo("iterations",1);

benchmark("array",iterations,elements,addToArray,function(){array.length=0});
benchmark("object",iterations,elements,addToObject,function(){object = Object.create({}); size=0;});
benchmark("set",iterations,elements,addToSet,function(){mySet.clear()});