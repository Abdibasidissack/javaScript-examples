// Event bubling and delegation

// using list
// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title')
// })
// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card content')
// })
// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card')
// })

// event delegation
document.body.addEventListener('click', DeleteItem);
function DeleteItem(e)
{
    

    if(e.target.parentElement.className === 'fa fa-remove')
    {

    }
}