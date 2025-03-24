/*
   Name exercise:Calculation of Mechanical Work
  Description:The mechanical work (W) performed on an object will be calculated according to the equation:
  autor:Nicole
  Date:march 20th 2025
*/

let distance=1;
let work;
counter=0;
counterOne=0;

while(distance>0){
let distance= prompt ("Enter the distance");
if (distance<=0) {
break;
}
let force= prompt("Enter the force");
work= force * distance 
counter=counter + work;
counterOne++;
console.log("The work: " +work);
}

console.log("Te sum of works are: " +counter);
console.log ("The totally of calculations are: " +counterOne);