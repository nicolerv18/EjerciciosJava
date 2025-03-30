/*
   Name exercise:Calculating Acceleration from Forces (force matrix + mass per object)
  Description:Generate a force matrix.
Calculate an acceleration matrix by applying Newton's Second Law
  autor:Nicole
  Date:march 26th 2025
*/
let iterationOne;
let iterationTwo;
let number;
let bulk=[2,5,6];
let forces=[
 [2,4,6],
[25,30,35],
[6,48,60]
];

for(iterationOne=0;iterationOne<3; iterationOne++){
let objet=[];
for(iterationTwo=0;iterationTwo<3;iterationTwo++){
acceleration= forces[iterationOne][iterationTwo] / bulk[iterationOne];
objet.push(acceleration); 
}
forces.push(objet);
}
  
console.log(forces);

