/*
   Name exercise:Calculation of Gravitational Potential Energy
  Description:The gravitational potential energy (Epg) of an object will be calculated according to the equation:
  autor:Nicole
  Date:march 20th 2025
*/

let gravity= 9.89;
let high =1;
counterOne=0;
counter=0;
while(high>0){
let high= prompt ("Enter the high");
if(high<0){
break;
}
let bulk= prompt ("Enter the bulk");
epg= high * gravity * bulk;
console.log("The gravitational potential energy is: " +epg);
counter=counter + epg;
counterOne++;
}
console.log("The sum of th gravitational potential energy are: " +counter);
console.log("T he totally of calculations  are:" +counterOne);

