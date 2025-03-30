let acceleration;
function calculation(force, bulk){
  acceleration= force /bulk;
 return acceleration;
}
 
 acceleration= calculation(75,3);
console.log("The acceleration is " +acceleration);