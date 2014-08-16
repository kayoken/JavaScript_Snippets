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

var leObj = inherit({y:1});
o.x = 1;
console.log(o.propertyIsEnumerable("x")); //true
console.log(o.propertyIsEnumerable("y")); //false, is inherited

Object.prototype.propertyIsEnumerable("toString"); // false not enumerable

var cat = {
	race: "eastern",
	size: 5,
	color: "white",
	"age is": 4
}

console.log("race" in cat);
console.log("balance" in cat);

console.log(cat.hasOwnProperty("toString"));

var o = {
  x:1,
  y:2,
  z:3
};

o.propertyIsEnumerable("toString");

for(p in o) console.log(o[p]);