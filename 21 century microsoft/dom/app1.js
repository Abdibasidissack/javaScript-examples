// // element selectors 

// // [+] document.getElementById()
// console.log(document.getElementById('task-title'));


// // getting things from the element 
// console.log(document.getElementById('task-title').id); // this out puts the name of the id only

// const taskTitle = document.getElementById('task-title');

// // changing the style
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle. style.padding = '30px';

// // making something disaper
// //document.getElementById('task-title').style.display='none'

// // changing the content in diffrent ways
// taskTitle.textContent = 'DIE';
// taskTitle.innerText = 'DIE 2';
// taskTitle.innerHTML = '<span> Task die </span>';

// querry selector 
// powerfull one 

console.log (document.querySelector('#task-title'));
console.log (document.querySelector('.card-title')); 
console.log (document.querySelector('h5'))


document.querySelector('li'). style.color = 'red';

// querying multiple subgroups
document.querySelector('ul li'). style.color = 'red';

// querying the last item within the task
document.querySelector('li:last-child'). style.color = 'blue';

// changing the color of the middle item 
document.querySelector('li:nth-child(3)'). style.color = 'yellow';

// changing the content of the fourth item
document.querySelector('li:nth-child(4)').textContent = 'I am gOIng to die';
