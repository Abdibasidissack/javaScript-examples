// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click',removeTask);
  // clear task event 
  clearBtn = document.addEventListener('click', clearTasks);
  // filter 
  filter = document.addEventListener('keyup', filterTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  //taskInput.value = '';

  e.preventDefault();
}

// removing task
function removeTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item')) 
    {
        // confirmation
        if(confirm('are you sure?'))
        e.target.parentElement.parentElement.remove();
    }
}
 
// clear tasks
function clearTasks(){
    // first way
   // taskList.innerHTML = '';

   // looping through
   // faster 
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);

   }
}

// filter tasks 
function filterTask(e)
{
    const text = e.target.value.toLowerCase();
     
    document.querySelectorAll('.collection-item').forEach(function(task)
    {
        const item =task.firstChild.textContent; 
        if(item.toLocaleLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block'
        }else{
            task.style.display = 'none'
        }
    });

}