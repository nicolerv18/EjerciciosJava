/*
   Name exercise:for
  Description:table of 5 
  autor:Nicole
  Date:march 15th 2025
*/

let squareOne= prompt("enter the Square One");
let squareTwo= prompt("enter the Square Two");
let squareThree= prompt("enter the Square Three");

areaOne=squareOne^2;
areaTwo=squareTwo^2;
areaThree=squareThree^2;

if (areaOne === areaTwo) {
    if (areaTwo === areaThree) {
      console.log("The areas are equal");
    } else if (areaOne > areaThree) {
      console.log("Area One and Two are equal, and are greater than Area Three");
    } else {
      console.log("Area One and Two are equal, and Area Three is greater");
    }
  } else if (areaOne === areaThree) {
    if (areaOne > areaTwo) {
      console.log("Area One and Three are equal, and greater than Area Two");
    } else {
      console.log("Area One and Three are equal, and Area Two is greater");
    }
  } else if (areaTwo === areaThree) { //Added to handle the case where areaTwo and areaThree are equal.
    if (areaTwo > areaOne) {
        console.log("Area Two and Three are equal, and greater than Area One");
    } else {
        console.log("Area Two and Three are equal, and Area One is greater");
    }
  } else {
    if (areaOne > areaTwo && areaOne > areaThree) {
      console.log("Area One is greater");
    } else if (areaTwo > areaOne && areaTwo > areaThree) {
      console.log("Area Two is greater");
    } else {
      console.log("Area Three is greater");
    }
  }
  console.log("Area one =", areaOne);
  console.log("Area two =", areaTwo);
  console.log("Area three =", areaThree);
}
