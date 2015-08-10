//paints a pattern


var star = "";
for(var i = 0; i < 7; i++){
   //adds a character to the star variable with each loop
   star += "#";
   console.log(star);
}

//print checker pattern
for(var j = 0; j < 8; j++){
    if(j%2 == 0){
      console.log("# # # # ");
    }
    else{
      console.log(" # # # #");
    }
}

//generates a patter of whichever size user wishes

//prompts user for input
var size = Number(prompt("Please enter size of field", "16"));

//if a number
if(!isNaN(size)){

    //initializing couple of values
    var hash = "#", space = " ", patternA = "", patternB = "";

    //initializes two different patterns according to user input
    while(patternA.length < size){
          patternA += hash;
          patternA += space;

          patternB += space;
          patternB += hash;
    }


    //use different pattern in each line
    for(var i = 0; i < size; i++){
        if(i%2 == 0){
          console.log(patternA);
        }
        else{
          console.log(patternB);
        }
    }
}

else{
    alert("Most unfortunately your value is not an number (NaN)");
}


//finds number dividible by 3, 5 and (3 and 5)

for(var i = 1; i <= 100; i++){
  if(i%3 === 0 && i%5 == 0) console.log("FizzBuzz");
  else if(i%3 === 0) console.log("Fizz");
  else if(i%5 === 0) console.log("Buzz");
  else console.log(i);
}