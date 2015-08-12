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

//Rekursion

function findSolution(target) {
  //start with 1
  function find(start, history) {
    //1 or 1+5 or 1*3 == target?
    if (start == target)
      return history;
    //is it too big to continue?
    else if (start > target)
      return null;
    else
      //try first + 5, when returned null, try * §
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }

  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

//***********************************************************************************************************//


//pass two arguments
function printFarmInventory(cows, chickens) {
  //define a string, if necessary convert to String
  var cowString = String(cows);
  //format the string
  while (cowString.length < 3)
    //concatenate
    cowString = "0" + cowString;
  //log the new string
  console.log(cowString + " Cows");

  //do the exact same thing again
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

//***********************************************************************************************************//

function absVal(number){
  if(number < 0){
    return number * -1;
  }
  else{
    return number;
  }
}

//***********************************************************************************************************//

function evenOdd(target){

  if(target == 1) return "odd";
  else if(target == 0) return "even";

  //recursively call the function again if first conditions not met
  else{
    return evenOdd(target - 2);
  }
}

console.log(evenOdd(17));
console.log(evenOdd(0));
console.log(evenOdd(34));
console.log(evenOdd(absVal(-53)));

//***********************************************************************************************************//

//define function
function countBs(string){
  //look for which char?
  var theChar = "B";
  //
  var result = 0;
  for(var i = 0; i < string.length; i++){
    //look for char@ given positions and compare
    if(string.charAt(i) == "B"){
      result++;
    }
  }
  return result;
}

var text = "Es war ein gutes Bad.";

console.log("There are " + countBs(text) + " Bs in the text.");

function countChar(string, character){
  var result = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) == character){
      result++;
    }
  }
  return result;
}

text = "Haha, blabla, oh Nein. 12% sind 11% zu viel!";



console.log("There are " + countChar(text, "%") + "% chars in the text.");

//***********************************************************************************************************//

function min(arg1, arg2){
  if(arg1 <= arg2){
    return arg1;
  }
  else{
    return arg2;
  }
};

//***********************************************************************************************************//

