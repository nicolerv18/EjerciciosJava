/*
   Name exercise:Simulation of an Object on an Inclined Plane
  Description:The force parallel to the surface of an inclined plane is F_parallel = m * g * sin(θ).
  autor:Nicole
  Date:march 22th 2025
*/
let gravity= 9.8;
let startAngle= prompt("Enter the initial angle");
let endAngle= prompt("Enter the end angle");
let bulk= prompt("Enter the bulk");
let totally= endAngle - startAngle;
for (let number = 0; number <= totally; number++) {
  let angle=parseInt (startAngle) + number;
  parallelForce= bulk * gravity * Math.sin(angle);

console.log("The parallel force of angle " +angle+ " is " +parallelForce);
}
