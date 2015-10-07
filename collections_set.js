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



let elements = process.argv.length>0? process.argv[2] : 1000;
let times = process.argv.length>1? process.argv[3] : 1;

benchmark("array",times,elements,addToArray,function(){array.length=0});
benchmark("object",times,elements,addToObject,function(){object = Object.create({}); size=0;});
benchmark("set",times,elements,addToSet,function(){mySet.clear()});