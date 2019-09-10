// objectName.propertyName
// examples

// one way 
var barigi = new Object();
barigi.name = 'Barigi';
barigi.age = 21;
barigi['place_of_birth'] = 'mandera';
console.log('My name is '+ barigi.name+ ",aged "+barigi.age+" and born in "+barigi.place_of_birth+".");

// second way
var person ={firstname:'john',age:11,born:2008}
console.log('My name is '+ person.firstname+ ",aged "+person.age+" and born in "+ person.born+".");
