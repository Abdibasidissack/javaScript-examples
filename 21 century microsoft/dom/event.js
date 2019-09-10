// interaction with UI

//adding event listener
document.querySelector('.clear-tasks').addEventListener('click', 

function(e){
    // console.log('hello');
    // e.preventDefault();


// the above function e  acts as a return

let val;
val = e; // chcecking the object
val = e.target; // does what is supposed to do
val = e.timeStamp; //shows the time stamp
val = e.type; // type of the function
val = e.target.id; // getting the id
val = e.target.className; // getting the class
val = e.target.innerText = 'hello'; //changes the text after clicking the button
val = e.clientY; // coordinates relative to the window
val = e.clientx; // coordinates relative to the window
val = e.offsetY; // coordinates relative to the element
val = e.offsetx; // coordinates relative to the element


console.log(val);

});