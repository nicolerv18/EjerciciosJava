let numberOne;
let numberTwo;
let addResult;
let subtResult;
let multiResult;
function addition(numberOne, numberTwo) {
   let addResult = numberOne + numberTwo; 
   return addResult;
}
 function subtration (numberOne, numberTwo){
   subtResult= numberOne - numberTwo;
 return subtResult;
}
function multiplication(numberOne, numberTwo){
   multiResult= numberOne * numberTwo;
 return multiResult;
}
 addResult= addition(12,23);
 subtResult= subtration(43,11);
 multiResult= multiplication(3,5);


console.log("Adition: " +addResult);
console.log("subtration: " +subtResult);
console.log("multiplication:" +multiResult); 