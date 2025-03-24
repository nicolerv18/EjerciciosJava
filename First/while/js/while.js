/*
   Name exercise:while
  Description:table of 5
  autor:Nicole
  Date:march 15th 2025
*/
 let counter=0;
let number=5;
let multiplication;
  
while(counter<number){
counter++;
multiplication= counter*number;
console.log ("the multiplicaiton is" +multiplication);
 if(multiplication%2==0){
     console.log("the number is even");
}
else{
  console.log("the number is odd");
}
}
 console.log("the counter is:" +counter);
