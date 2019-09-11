//creatiing variable
 const heading_add_user = document.querySelector('h2')
const title_Changing = document.querySelector('h1');

//changing the title
title_Changing.textContent = 'I have changed you';

// changing the kamu  3 element to Issack
const kamau_text = document.querySelector('li:nth-child(3)').textContent = 'ali';

// changing the last elemts color
const Andrew_text = document.querySelector('li:nth-child(5)').style.color = 'red';

 

//eventhandler section
// const MouseMove = document.querySelector('.btn')
// MouseMove.addEventListener('click',runEvent)

// function runEvent(e)
// {
//     console.log(heading_add_user.type)
    
    
//     }

// creating new list elemnt Issack
const NewList = document.createElement('li');
NewList.className = 'list-group-item';
NewList.appendChild(document.createTextNode('Issack'))
document.querySelector('ul.list-group').appendChild(NewList);

// adding another user
// const SecondList = document.querySelector('li');
// SecondList.className = 'list-group-item';
// SecondList.appendChild(document.createTextNode('ATIYA'));
// document.querySelector('ul.list-group').appendChild(SecondList);








const NewUser = document.querySelector('.form-control');
const ButtonAdd = document.querySelector('.btn-group')
ButtonAdd.className = '.btn btn-primary'
// ButtonAdd.textContent = 'die'
ButtonAdd.addEventListener('click', function(e)

{
   
    NewUser.id = 'formGroupExampleInput';
    if(NewUser.value === '')
    { 
        alert('Kindly insert the new user ')
    }
    else
    {
        NewList.appendChild(document.createTextNode(NewUser.value))
        document.querySelector('ul.list-group').appendChild(NewList);
    }
    

e.preventDefault();
})