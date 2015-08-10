//paints a pattern

var star = "";
for(var i = 0; i < 7; i++){
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

var size = Number(prompt("Please enter size of field", "16"));

if(!isNaN(size)){

    var hash = "#", space = " ", patternA = "", patternB = "";

    while(patternA.length < size){
          patternA += hash;
          patternA += space;

          patternB += space;
          patternB += hash;
    }


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