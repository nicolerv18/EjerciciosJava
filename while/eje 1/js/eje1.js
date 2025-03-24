/*
   Name exercise: Calculating Force with Newton's Second Law
  Description:Create a flowchart that asks for
 a mass (m) and acceleration (a) and calculate the force (F)
  autor:Nicole
  Date:march 20th 2025
*/
 let force; 
let counter=0;
let counterOne= 0 ;
let bulk=1 ;
acceleration=1;

 while(bulk>0 && acceleration>0) {
let bulk= prompt ("Enter the bulk");
 let acceleration= prompt ("Enter the acceleration");
if (bulk < 0 && acceleration < 0) {
    break; 
  }
 
force= bulk * acceleration;
counter++;
counterOne= counterOne + force;
console.log("The force is:" +force);
} 
{

console.log ("The Sum of force are: " +counterOne);
console.log ("The total of the calculations are: " +counter);
}