/*
   Name exercise:age is legal or no
  Description:Determinación de Mayoría de Edad y Promedio de Edades
  autor:Nicole
  Date:march 15th 2025
*/
let iterationOne;
let iterationTwo;
let number;
let matriz=[];
let sumRows=[0,0];
let sumColumns=[0,0];

for(iterationOne=0;iterationOne<2; iterationOne++){
let objet=[];
for(iterationTwo=0;iterationTwo<2;iterationTwo++){
number=Math.floor(Math.random()*100);
objet.push(number); 
sumRows[iterationOne] += number;
sumColumns[iterationTwo] += number;
}
matriz.push(objet);

}
console.log(matriz);
console.log("Sum of rows"sumRows);
console.log("Sum of colums"sumColumns);

