//REPLACING AN ELEMENT

//create Element 
const newHeading = document.createElement('h6');
//add the id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('created TASK LIST'));

// getting the old heading 
const oldHeading = document.getElementById('task-title');

// getting the parent of the element 
const cardAction =document.querySelector('.card-action');

// replacing the old one 
cardAction.replaceChild(newHeading, oldHeading);

// how to remove something / element 
const lis = document.querySelectorAll('li');
 //creating  varriable for the ul
 const List = document.querySelector('ul');
 
 //removing specific element by using array concept 
 lis[0].remove();

 //removing by child element
List.removeChild(lis[3]);

// classes adding   
const firstEL = document.querySelector("li:first-child");
const link = firstEL.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList.add("yes"); // adding a class onto the html code



// attribute adding or deleting 
val = link.getAttribute('href');
val = link.setAttribute('href',"http://www.google.com");
console.log(val);