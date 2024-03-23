
// * SPEED DETECTOR

// * Goal

/*
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/

const prompt = require("prompt-sync")({sigint: true});

let speed = parseInt(prompt("Input speed: "));    // * Collecting the speed.

let div = "------\n";

function speedDetector(s){
  let output;    // * The value that the function returns.
  let demeritPoint = 0;    // * Points accumulated in every 5Km/s after passing the speed limit (70).

  // * We begin by determining whether the speed is bellow the specified limit.
  if(s < 70){
    output = "Ok";
  }else{
    demeritPoint = Math.floor(((s - 70) / 5));    // * We take the extra speed (s - 70) and determine how many 5Km/s was attained.

    /*
    * Now according to how many 5Km/s was attained, it will determine whether the drivers License will be suspended or demerit points to be issued
    */
    if(demeritPoint <= 12){
      output = `Points = ${demeritPoint}`;
    }else{
      output = "License suspended";
    };
  };
  
  return div + output;
};

let result = speedDetector(speed);

console.log(result);