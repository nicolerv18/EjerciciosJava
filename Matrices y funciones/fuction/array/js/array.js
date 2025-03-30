let iterationOne;
let sum=0;
let number;
let matriz=[];
function suma(numberOne){
  sum=sum + (+numberOne);
 return sum;
}
for(iterationOne=1;iterationOne<=4; iterationOne++){
let number=prompt("Enter the number");
 suma(number);
matriz.push(number)

}
 console.log("The sum is " +sum);