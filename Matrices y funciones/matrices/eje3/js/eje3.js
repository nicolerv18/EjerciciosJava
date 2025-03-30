 /*
   Name exercise:Position Simulation Using Matrices and Constant Acceleration
Description: Simulates the motion of an object with constant acceleration over several seconds.) and enter the object's mass
  autor:Nicole
  Date:march 27th 2025
*/

const acceleretion=[2, -1];
const initialSpeed= [4,0];
const initialpotition=[0,0];
const steps= 5; 
let potition=[];

for (iterationOne=0; iterationOne<1; iterationOne++){
let objet=[];
for (iterationTwo=0; iterationTwo<steps; iterationTwo++){
 number= initialpotition[iterationOne] + initialSpeed[iterationOne] * iterationTwo + acceleretion[iterationOne] * 0.5 * Math.pow(iterationTwo, 2); 
objet.push(number);
 console.log("The potition of " +(iterationTwo+1)+ " seconds is " +number+ " M/S");
  }
  potition.push(objet);

}
