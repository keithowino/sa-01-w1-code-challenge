/*
? STUDENT GRADE GENERATOR.
* Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
  A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
*/

const prompt = require("prompt-sync")({sigint: true});

const marksInput = parseInt(prompt("Input student marks? "));

function grader(marks){
  let div = "------\n";
  let output;

  if(marks > 79 && marks <= 100){
    output = "A";
  }else if(marks > 59 && marks <= 79){
    output = "B";
  }else if(marks > 49 && marks <= 59){
    output = "C";
  }else if(marks > 39 && marks <= 49){
    output = "D";
  }else if(marks >= 0 && marks <= 39){
    output = "E";
  }else{
    output = "Marks entered are invalid"
  };

  return div + output;
};

let result = grader(marksInput);

console.log(result);

