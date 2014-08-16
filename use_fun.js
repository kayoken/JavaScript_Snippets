function inherit(p) {
	if (p === null) throw TypeError(); // if p is defined and not null
	if (Object.create) // should be existing
		return Object.create(p); // create child use prototype p 
	var t = typeof p; //look if p is not Object or Function
	if (t !== "object" && t !== "function") throw TypeError();
	
	function f() {} // constructor
	
	f.prototype = p; // Set its prototype property to p.
	return new f(); // Use f() to create an child of p.
}

//overwrite properties
function extend(o, p){
	for(prop in p){
		o[prop] = p[prop];
	}
	return o;
}

//assign non existent property to o
function merge(o, p){
	for(prop in p){
		if(o.hasOwnProperty[prop]) continue;
		o[prop] = p[prop];
	}
	return o;
}

//if no property of that name in p delete respective property in o
function resctrict(o, p){
	for(prop in p){
		if(!(prop in p)) delete o[prop]
	}
	return o;
}

//delete properties from o which exist in p
function subtract(o, p){
	for(prop in p){
		delete o[prop];
	}
	return o;
}

