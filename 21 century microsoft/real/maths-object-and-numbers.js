let val;
const num1 = 100;
const num2 = 50;

//simple number calculataion
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;


// using Math object
val=Math.pow(8,2); // raises 8 to power 2
val=Math.sqrt(64); // square root
val=Math.round(8.3); // rounds the normal way
val=Math.ceil(8.2); // rounds to the next whole number even if its < 0.5
val=Math.floor(8.8); // rounds to the lower whole number even if its > 0.5
val = Math.random(); // geneating roundom number less than 1
val = Math.random() * 20; //restricitng it to generate 0 to 19
val = Math.floor(Math.random() * 20 + 1); // doing away with the decimal generated above  
val = Math.abs(-3); // return the abolute of the number -- positive numbe
val = Math.min(22,1,2,34,5,6,76,5,4,33, -2); // knowning the minimum number within an array
val = Math.max(22,1,2,34,5,6,76,5,4,33, -2); // knowing maximum number within an array
console.log(val);