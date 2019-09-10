// having different types of an array 
const number = [12,3,5,6,5,4,12,23454,5567,53,2,3,4];
const number2 = new Array([22,3,4,3,2,1,2,3]);
const fruits = ['apple', 'banana', 'mango', 'pear'];
const mixed = [2,'home', true, undefined, null];

let val;

// mutation

// reassigning the array
val = number[0] = 1000000;

// adding a number to an array 
val = number.push(1111); // first way
val = number.unshift(2222); // second way whuch makes it the first element in an array 

// removing the last element of an array
val = number.pop();

// removing the first lement of an array 
val = number.shift();

// removing the group of elements within an array
val = number.splice(0,3);

// understanding the length of an array
console.log(number.length);

//reversing the order of an array
number.reverse();

// concatinating arrays
val = number.concat(mixed);

// sorting the array of datatype string in alphabetical order
val = fruits.sort();

//sorting the array of datatype numbers by using compare function
val = number.sort((x,y)=>{
   return x-y;
})

// using find function
function unde50(num) 
{
    return number > 1000;
} 
val= number.find(unde50);

console.log(number)
console.log(val);