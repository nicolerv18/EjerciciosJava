/*
   Name exercise:the Friction of an Object 
  Description:Calculating the Friction of an Object on a Surface
  autor:Nicole
  Date:march 20th 2025
*/


  let bulk = prompt("Enter the bulk:");
  let coefficient=prompt("Enter the coefficient of friciton:");
  let aceleration= 9.8;

  let forceNormal= bulk * aceleration;

  let forcefriction = coefficient * forceNormal;

  console.log("The force of friction is " + forcefriction);

  if (forcefriction > 50) {
      console.log("The friction is high.");
  } else {
    console.log("The friction is low.");
  }
