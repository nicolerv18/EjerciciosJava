/*
   Name exercise: Weight Calculation on Different Planets
  Description:The weight (W) of an object on different planets will be calculated using the equation:
W=m×gW = m \times g
  autor:Nicole
  Date:march 20th 2025
*/
let weight; 
let counter=0;
let counterOne= 0 ;
let counterTwo= 0 ;
let counterThree= 0 ;
let bulk=1 ;

 while(bulk>0) {
let bulk= prompt ("Enter the bulk");

if (bulk < 0) {
    break; 
  }
let select= prompt ("SELECT GRAVITY: 1. Earth / 2. Jupiter / 3.Mars ");


if ( select==1) {
aceleration= 9.81;
    weight = bulk* aceleration;
counterOne= counterOne + weight;
  }  else if ( select==2) {
   aceleration=3.71;
    weight= bulk* aceleration;
counterTwo= counterTwo + weight;
  } else  {
aceleration= 24.79;
    weight= bulk* aceleration;
counterThree= counterThree + weight;
  }
 
counter++;
console.log("The weight: " +weight);
} 
console.log ("The Sum of weight of  earth are: " +counterOne);
console.log ("The Sum of weight  of jupiter are: " +counterTwo);
console.log ("The Sum of weight of mars are: " +counterThree);

