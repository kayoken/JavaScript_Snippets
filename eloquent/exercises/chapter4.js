var listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[listOfNumbers.length - 1]);

//***********************************************************************************************************//

var mack = [];

mack.push("Mack");
mack.push("the", "Knife");

console.log(mack);

console.log(mack.join(" "));

console.log(mack.pop());

console.log(mack);

console.log(mack.join(" "));

//***********************************************************************************************************//

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
console.log(day1.wolf);

day1.wolf = false;
console.log(day1.wolf);

//***********************************************************************************************************//

//journal is an array
var journal = [
  //contains as elements objects
  {
   //events is another array
   events: ["running", "pizza", "television"],
   squirrel: false
  },
  {
   events: ["running", "touched tree", "lasagna", "work"],
   squirrel: false
  },
  {
   events: ["running", "touched tree", "peanuts", "work", "brushed teeth"],
   squirrel: true
  },
];

console.log(typeof journal[1]);
console.log(journal[1].events[2]);

//***********************************************************************************************************//

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object2 == object3);

object1.value = 23;
console.log(object2.value);

//***********************************************************************************************************//

//pass an array an the index to be removed
function remove(array, index) {
  //slice the array -> beginning, excluding the index and after
  return array.slice(0, index)
    //concat with the sliced array beginning after the index
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

//***********************************************************************************************************//

console.log("  okay \n ".trim());
// → okay

//***********************************************************************************************************//

//although we didn't define any additional arguments for the arguments we can still use them
//with the help of arguments.length
function addEntry(squirrel){
  var entry = {events = [], squirrel: squirrel};
  for(var i = 1; i < arguments.length; i++){
    entry.events.push(arguments[i]);
  }
}
addEntry(true, "work", "pizza", "running");

//***********************************************************************************************************//

function range(start, end){
  var theRange = [];
  for(var i = start; i <= end; i++){
    theRange.push(i);
  }
  return theRange;
}

function sum(theRange){
  var sum = 0;
  for(var i = 0; i < theRange.length; i++){
    sum += theRange[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));

//***********************************************************************************************************//


function range(start, end, step){
  if(step == undefined){
  step = 1;
  }
  var theRange = [];
  if(step > 0){
    for(var i = start; i <= end; i+= step){
    theRange.push(i);
    }
  }
  else{
    for(var i = start; i >= end; i+= step){
    theRange.push(i);
    }
  }
  return theRange;
}

function sum(theRange){
  var sum = 0;
  for(var i = 0; i < theRange.length; i++){
    sum += theRange[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));
console.log(sum(range(5, -7, -2)));

//***********************************************************************************************************//

function deepEqual(arg1, arg2){
  if(typeof arg1 != typeof arg2){
    return false;
  }
  else if(typeof arg1 == "object" && typeof arg2 == "object" && arg1 != null && arg2 != null){
      if(Object.keys(arg1).length == Object.keys(arg2).length){
        for(var objKey in arg1){
          if(objKey in arg2){
            console.log(arg1[objKey], arg2[objKey]);
      return true;
          }
          else{
            return false;
          }
        }
      }
      else{
       return false;
      }
    }
    else if(arg1 === arg2){
       return true;
    }
}


var bigDog = "doge";
var smallDog = "doge";
var cat = {furry: "a little", size: 7, loves: "eat"};
var dog = {furry: "a little", size: 6, loves: "eat"};

console.log(deepEqual(bigDog, smallDog));
console.log(deepEqual(dog, smallDog));
console.log(deepEqual(dog, cat));