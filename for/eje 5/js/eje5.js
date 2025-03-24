/*
   Name exercise:Calculating Tension in a Rope
  Description:When an object hangs from a rope, the tension in the rope is calculated as T = 
m * g, if there is no additional acceleration. μ * N
  autor:Nicole
  Date:march 22th 2025
*/

let gravity= 9.8;
let number; 
let totally= prompt("Enter the totally of objects");
for(number=1; number<= totally; number++){ 
  let bulk= prompt("Enter the bulk of object " + number);
  tension= bulk * gravity;

   console.log("The tension of object " +number+ " is " +tension);
}