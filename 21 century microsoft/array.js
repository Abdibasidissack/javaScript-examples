//array
let cart=[]

// adding iterms
function add(items)
{
var add_items = cart.concat(items)
return add_items
}

// removing item
function remove(items)
{
    var removed_items =cart.pop(items);
    return removed_items;
}

// get all items length
function get_length()
{ 
  return  cart.length;
}

// check item
function check_item(items )
{

    var itrm_esist = cart.includes(items)
    return itrm_esist;
}


cart = add(['mango', 'juice'])

console.log(cart);
console.log(check_item());
console.log(get_length())



