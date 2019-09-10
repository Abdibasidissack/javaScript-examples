//CONVERTING NUMBERS TO STRING AND VICE VERSA

let val; // primitive variable

// [+] number to string 
val = String(5) ; // this is the first way of doing 
console.log(typeof val);
val = (10).toString() // the scnd way of converting 
console.log(typeof val);

// [+] boolean to string 
val = String(true);
console.log(typeof val);

// [+] date to string 
val = (new Date()).toString();
console.log(val);
console.log(typeof val);

// [+] array to string
val = ([1,2,3,4,5]).toString();
console.log(typeof val);


//VICE VERSA

// [+] string to number
val = Number('5'); // the first way of doing it 
console.log(typeof val); 
val = parseInt('10') // the second way of doing it if you want whole number
console.log(typeof val) 

// [+] boolean to number
val = Number(false);
console.log(val)
console.log(typeof val);
console.log(val.toFixed(2)); // used for numbers to out put the decimal