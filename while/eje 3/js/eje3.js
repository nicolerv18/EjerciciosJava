/*
   Name exercise: Calculation of Newton's Third Law (Action and Reaction)
  Description:The program will ask for an applied force (F) and display its reaction force.
  autor:Nicole
  Date:march 20th 2025
*/
let forceReaction; 
let counter=0;
let counterOne= 0 ;
let force=1;
 while(force>0) {
let force= prompt ("Enter the force");
    forceReaction= force * (-1);
counterOne= counterOne + forceReaction;

if (force <= 0) { 
break; } 

 counter++;
console.log("The force of reaction: " +forceReaction);
} 

console.log ("The Sum of Force reaction are: " +counterOne);
console.log ("The total of the calculations are: " +counter);
