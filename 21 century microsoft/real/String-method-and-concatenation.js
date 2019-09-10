// STRINGS  

const firstName = 'Abdibasit';
const lastName = 'Issack';
const age = 36;
const message = 'Hello abdibasid Welcome to the world of learning javascript';
const message2 = 'hello, how are you, you good, you fine';
let val;

//normal way of joining the two
val = firstName+lastName; // the output has no space 

//string concatenation
val = firstName +' '+lastName; // the output has a space

// appending a string to another string without using the normal way 
val = 'James ';
val += 'Bond';

// checking the index which a specific character resides on
val = firstName.indexOf("b"); // remember counting starts from 0

//checking the character from the last word using the index number 
val = firstName.charAt(4);

//getting the last character of the string 
val = firstName.charAt(firstName.length -1)

// checking the character of a word using array
val = firstName[0];

//escaping one quotation by using back slash
val = 'I can\'t work this way'; 

// changing the case to upper case
val= firstName.toUpperCase();

//changing the case to lower
val= firstName.toLowerCase();

//checking the length of a string 
val = firstName.length;

// getting the substring of a string 
val = message.substring(5,10); // getting the character starting from index 5 to index 10

// slicing a word from a string 
val = message.slice(0,4); // slicing a word from index 0 to index 4 but not 4 included

// replacing a word within the string 
val = message.replace('abibasid', 'John');

//spliting the string into array by passing a parameter 
val = message.split(" "); // split the words using space parameter
val = message2.split(","); // split using the comma



console.log (val)