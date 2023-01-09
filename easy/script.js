

// create two name variables, 
// assign each name a string value 
const girlName= "Elizabeth";
const boyName= "Jonathan";

// find the value of characters in each string  
console.log(girlName.length);
console.log(boyName.length);

// create a function that takes in 2 paramaters 
// const calculateCharDifference = () => {}

function calcCharDifference (nameOne, nameTwo) {

//  calculates the difference of those values
  return console.log(`The name ${nameOne} is longer than ${nameTwo} by ${nameOne.length - nameTwo.length} character`);
  
// returns the difference  
} 

calcCharDifference(girlName, boyName);