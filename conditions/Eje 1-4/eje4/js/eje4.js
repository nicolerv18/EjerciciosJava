/*
   Name exercise:notas
  Description:calcular notas finales
  autor:Nicole
  Date:march 19th 2025
*/

let gradeOne=prompt("Enter the first grade");
let gradeTwo= prompt("Enter the second grade");
let gradeThree= prompt("Enter the third grade");

avarageOne= gradeOne*0.2;
avarageTwo= gradeTwo *0.35;
avarageThree= gradeThree *0.45;

avarage= avarageOne + avarageTwo + avarageThree;
 if ( avarage> 4.5){
 console.log ("The grade is high");
} else if (avarage<4.5 && avarage>3.5) {
console.log ("The grade is good");
} else if (avarage< 3.5 && avarage > 3.0){
 console.log("the garde is medium");
} else {
 console.log ("The grade is bad");
}