const clearButton = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //click
// clearButton.addEventListener('click',runEvent);

// // double click
// clearButton.addEventListener('dbclick',runEvent);

// //mouse down
// clearButton.addEventListener('mousedown',runEvent);

// //mouse up 
// clearButton.addEventListener('mouseup',runEvent);

// // mouse enter
// clearButton.addEventListener('mouseenter',runEvent);

// // mouse leave
// clearButton.addEventListener('mouseleave',runEvent);

// //mouse over
// clearButton.addEventListener('mouseover',runEvent);

// mouse out
//clearButton.addEventListener('mouseout',runEvent);

// mouse move
card.addEventListener('mousemove',runEvent);



// event handler
function runEvent(e){
    console.log( `Eventype : ${e.type}`);

    heading.textContent=`mouseX ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},40 )`
}