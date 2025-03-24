/*
   Name exercise:for
  Description:table of 5 
  autor:Nicole
  Date:march 15th 2025
*/
let number=5;
let counter;
let potetion;
let potetion2;

for (counter=1; counter<=number ; counter++){
    if(counter % 2==0){
     potetion= counter*counter;
     console.log ("The number  is even: " +potetion);

} 
else{
potetion2= counter*counter*counter;
 console.log ("The number is odd: " +potetion2);
}  

}
