const formm = document.querySelector('form');
const taskInput = document.getElementById('task');

//clear input
taskInput.value='';

//formm.addEventListener('submit', runevent);


 //key down
 taskInput.addEventListener('keydown',runevent )

// key up
taskInput.addEventListener('keydown',runevent )

//key press
taskInput.addEventListener('keypress ',runevent )

function runevent (e){
    // console.log(`Event typte : ${e.type}`)
  
    // //get input value
    // console.log(taskInput.value);

     e.preventDefault();

    console.log(e.target.value);
}