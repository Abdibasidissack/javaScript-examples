// STRING LITERALS 

const name = 'Abdibasit';
const age = 36;
const job = 'Software Developer';
const home = 'Mandera';
let person;

const name2 = 'meryan';
const age2 = 20;

// installing html from the javascript
// without string literal
person = '<ul> <li>Name :' + name + '</li>   <li> Age : '+ age + '</li>  <li> Job: '+ job + '</li>  <li> Home: ' + home +'</li> </ul>';

// or 

person = 'Name *************' + name +
            '\nAge **************** '+ age +
            ' \nJob **************** '+ job +
            ' \nHome **************** ' + home ;
console.log(person);

//removing the li
person = 'Name :' + name + '\nAge : '+ age + ' \nJob: '+ job + ' \nHome: ' + home ;
console.log(person);

// with string literals 
person = `Name ===== ${name} \nAge ===== ${age} \nJob ===== ${job} \nHome ===== ${home}`
console.log(person);

person = ` my name is : ${name2} and i am ${age2}`;
person = ('my name is :'+ name2);
console.log(person);