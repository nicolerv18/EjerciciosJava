/*
   Name exercise: Motion Simulation with Newton's First Law
  Description:If the force is not zero, the acceleration is calculated as:
  autor:Nicole
  Date:march 20th 2025
*/

let distance;
let time=0;
let velocity;
force=1;
while (force>0){
let force= prompt ("Enter the force");
if (force<=0){
 break;
}
let bulk= prompt ("Enter the bulk");
 acceleration = force / bulk;
 time++;
        velocity= acceleration * time; 
        distance= velocity * time; 
console.log("The acceleration is: " +acceleration);
}
 console.log("The time is: " +time);
console.log ("The totally distence is: " +distance);