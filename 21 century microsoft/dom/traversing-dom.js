let val;

// out puting the unordered list that has a class of colletion
const list = document.querySelector('ul.collection');
console.log(list);

// out puting the first child of list that has a class of collection-item
const listItem = document.querySelector('li.collection-item:first-child');
console.log(listItem);

// getting the propertie that are attached to this node s

// child node of unordered list
let elements = list.childNodes;
console.log(elements);

// getting children elemnt node 
let Chldrn = list.children;
console.log(Chldrn);

// getting specific child using array
let Chld = list.childNodes[0];
console.log (Chld);

// getting the a specific child node name 
let ChldN = list.childNodes[1].nodeName;
console.log(ChldN);

// getting specific child node type
let ChldT = list.childNodes[1].nodeType;
console.log(ChldT);

// node type reference table
/*
    1 - Element node
    2 - Attribute (depricated)
    3 - Text node
    8 - Comment
    9 - Document itself
    10 - Doctype
*/

// getting the first element child within the ul
let fChld = list.firstChild; // similar to child node 
console.log(fChld);

// but if we want only the first child element
let fChldE = list.firstElementChild;
console.log(fChldE);

// this happens to the last chils too
let lChld = list.lastChild;
console.log(lChld);

// getting the las element with ul
let lChldL = list.lastElementChild;
console.log(lChldL);

// counting the number of the elements within ul
let count = list.childElementCount;
console.log(count);

// getting the parent element/node
let Pnode = listItem.parentNode;
console.log(Pnode);

//getting the parent of parent
let PnodeP = listItem.parentElement.parentElement;
console.log(PnodeP);

// jsut like having a child, we can have a siblings
let sib = listItem.nextSibling;
console.log(sib);

// if you want next element sibling
let elemSib = listItem.nextElementSibling;
console.log(elemSib);

// jsut like having a next sibling we have previous sibling
let Psib = listItem.previousSibling;
console.log(Psib);

// if you want next element sibling
let PelemSib = listItem.previousElementSibling;
console.log(PelemSib);