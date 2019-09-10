// getting the document 
let val = document;
console.log(' the whole document is : '+val);

// getting the first element 
let EL1 = document.firstElementChild;
console.log('first element chuld  : '+EL1);

// getting to the body
let BDY = document.firstElementChild.lastChild;
console.log('first element chil last element child : '+ BDY);

//getting the task element 
let TSK = document.querySelector('h5');
//changing the h5 element 
TSK.textContent = "changed by using the query selector"
console.log( 'the title has been changed  '+ TSK);

// changing the first element of ul
let firstLI = document.querySelector('li.collection-item');
firstLI.innerHTML = 'i have been changed by me';
firstLI.style.color = 'red';
console.log('first '+firstLI);

// changing the third element within the unordered list
let thirdLI = document.querySelector('li:nth-child(4)').textContent = 'i have been changed by nth formaat';
console.log(thirdLI);

//changing the last element within the list
let LastLI = document.querySelector('li:nth-child(5').textContent = 'changed by inner html property';
console.log(LastLI);

//creating a new element using javascript
let NewEl = document.createElement('li');
NewEl.className='collection-item';
NewEl.appendChild(document.createTextNode('I am the new element added ***************'));
document.querySelector('ul.collection').append(NewEl);
// adding the favicon to element created above
//creating the link
const link = document.createElement('a')
// adding class to the link
link.className  = 'delete-item secondary-content';
// addding icon
link.innerHTML='<i class="fa fa-remove"></i>';
// append link into li
NewEl.appendChild(link);