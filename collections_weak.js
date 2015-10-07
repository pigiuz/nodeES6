'use strict'

let people = new Set();
people.add({name:"John", sex:"M"});
people.add({name:"Fred", sex:"M"});
people.add({name:"Jane", sex:"F"});
// at this point the 3 objects have 1 reference hold by the containing set

let men = new WeakSet();

// filtering collection
people.forEach(function(person){
	if(person.sex==="M"){men.add(person)} // still 1 reference!
});

for(let person of people){
	console.log("is "+person.name+" a man? "+ men.has(person));
}

// releasing set will clear weakset as well!!
// no need to call men.clear()
people.clear();