// defining a function and invoking it
function one()
{
    console.log("one")
}
one();

//as a method

const obj = {
    two: function()
    {
        console.log("two")
    }
}

obj.two();

//or

const obj1 = {
    three(){
        console.log("three")
    }
}
obj1.three();


// lastly

function four()
{
    return 4;
}
console.log(four.call())

// not seen often and its called function constructor
const Five  = new Function('return 5');
console.log(Five())