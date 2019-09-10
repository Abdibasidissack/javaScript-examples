//create element
const li = document.createElement('li');

// adding class
li.className='collection-item';

// adding an id 
li.id = 'new-item';

// adding attribute
li.setAttribute('title', 'new item')

// creating a text node and append 
li.appendChild(document.createTextNode('go forth and die') );


//creating a link
const link = document.createElement('a');

// adding class to the link
link.className  = 'delete-item secondary-content';

// addding icon
link.innerHTML='<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// apend li as child to ul

document.querySelector('ul.collection').appendChild(li);
console.log(li);

