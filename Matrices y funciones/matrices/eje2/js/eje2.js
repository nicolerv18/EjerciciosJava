 /*
   Name exercise:Position Simulation Using Matrices and Constant Acceleration
Description:
Simulates the motion of an object with constant acceleration over several seconds.ector matrix) and enter the object's mass
  autor:Nicole
  Date:march 27th 2025
*/
let number = 0;
let iterationOne;
let iterationTwo;
let forces = [
  [20, 5],
  [2, 3],
  [12, 63]
];
let bulk = 5;

for (iterationOne = 0; iterationOne <=2 ; iterationOne++) {
  let objet = [];
number=0;
  for (iterationTwo = 0; iterationTwo <= 1; iterationTwo++) {
    number = (number + forces[iterationOne][iterationTwo]);
    objet.push(number);
  }
  forces.push(objet);
 acceleration = number/bulk; 
   console.log("The sum of forces is " + number + " and acceleration is " + acceleration);

}


console.log(forces);
