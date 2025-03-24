/*
   Name exercise:age is legal or no
  Description:Determinación de Mayoría de Edad y Promedio de Edades
  autor:Nicole
  Date:march 15th 2025
*/

let age=13;
if (age>=18) {
         console.log("the age is legal " +age);
    } else {
      console.log("The age is less " +age);
    }
let ageOne=16;
if (age>=18) {
         console.log("the age is legal " +ageOne);
    } else {
      console.log("The age is less " +ageOne);
    }
let ageTwo=20;
if (age>=18) {
         console.log("the age is legal " +ageTwo);
    } else {
      console.log("The age is less " +ageTwo);
    }
let averageAge = (age + ageOne + ageTwo)/3 ;

if (averageAge>=18) {
         console.log("the age is legal " +averageAge);
    } else {
      console.log("The age is less " +averageAge);
    }