/*
   Name exercise:Verification of Newton's First Law
  Description:If the net force (F) on an object is zero, it will remain at rest or in uniform motion.
  Date:march 22th 2025
*/ 

let number;
let totally= prompt("Enter the totally of calculations");
for (number=1; number<= totally; number++){
let force= prompt ("Enter the force");

if (force!=0){
 console.log("The object " + number + " is in motion" );

} else {

 console.log("The object "+ number + " is at rest" );
}
}