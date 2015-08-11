//just a simple power function

var power = function(base, exponent){
    var result = 1;
    for(var i=0; i < exponent; i++){
        result *= base;
    }

    //if no value given, function will return undefined
    return result;
};

console.log(power(2, 10));


//***********************************************************************************************************//

//concerning the scope of variables


var landscape = function(){

  var result = "";

  var flat = function(size){
    for(var i = 0; i < size; i++){
      result += "_";
    }
  }

  var mountain = function(size){
    result += "/";
    for(var i = 0; i < size; i++){
      result += "*";
    }
    result += "\\";
  }


  flat(4);
  mountain(3);
  flat(2);
  mountain(1);
  flat(6);

  return result;
};


console.log(landscape());

//***********************************************************************************************************//

//function declarations are not part of the regular top-to-bottom flow of control
// hoisting

console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}

//***********************************************************************************************************//

//overloading functions

function power(base, exponent){
  if(exponent == undefined){
     exponent = 2;
  }
  var result = 1;
  for(var i = 0; i < exponent; i++){
     result *= base;
  }
  return result;
}

console.log(power(3,3));
console.log(power(3));

//***********************************************************************************************************//


//closures
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

//***********************************************************************************************************//

function multiplier(factor){
  return function(numer){
    return factor * number;
  }
}

var twice = multiplier(2);

console.log(twice(4));
console.log(twice(10));

//***********************************************************************************************************//

