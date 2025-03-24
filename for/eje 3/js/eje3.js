/*
   Name exercise:Calculating the Weight of an Object on Different Planets
  Description:The weight of an object depends on the gravity on each planet
  autor:Nicole
  Date:march 22th 2025
*/

let number;
let weight;

 for (number=1; number<=4; number++){
   let bulk= prompt ("Enter the bulk");
   let select= prompt ("Select of planet: 1.Earth // 2. Mars // 3. Jupiter // 4. Moon ");

if (select==1){ 
 console.log("The weight in the Earth is: " + weight);
 weight= bulk * 9.8;
} else if (select==2){ 
 console.log("The weight in Mars is: " + weight);
 weight= bulk * 3.7;
} else if (select==3){ 
 console.log("The weight in Jupiter is: " + weight);
 weight= bulk * 24.8;
} else { 
 console.log("The weight in Moon is: " + weight);
 weight= bulk * 1.6;
}  

}