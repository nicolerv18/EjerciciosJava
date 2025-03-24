/*
   Name exercise:Calculation of Friction Force
  Description:The friction force is calculated with the equation: F_friction = μ * N
  autor:Nicole
  Date:march 22th 2025
*/
let totally= prompt("Enter the totally of calculations");
let coefficientF= prompt ("Enter the Coefficient of friction");
let number;
let gravity= 9.8;

 for(number=1; number<= totally; number++){

let bulk= prompt("Enter the bulk");
normal= coefficientF * gravity;
frictionForce= normal * bulk;
 console.log("The friction force of bulk "+ bulk +  " is: " +frictionForce);

}