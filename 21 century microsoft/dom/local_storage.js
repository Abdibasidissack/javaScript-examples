/// set local storage item
// localStorage.setItem('name','john');

// // set session storage item
// sessionStorage.setItem('name','Beth');

// // remove from the storage
// //localStorage.removeItem('name')

// // get from storage
// const name = localStorage.getItem('name')
// console.log(name);

// //clear local storage
// //localStorage.clear();

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        task[];
    }
    else{ 
        tasks = localStorage.getItem('tasks');
    }

    localStorage.setItem('task',task);
    alert('Task saved');
    e.preventDefault();
     
})