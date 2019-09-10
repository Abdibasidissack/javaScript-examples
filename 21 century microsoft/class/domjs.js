let user={
    age : 23,
    name:'someone',
    likes:['music','booze'],
    hates:['classes']
}
console.log(`# ${user.likes[0]} and # ${user.likes[1]}`)

// user.likes.map(like)=>
// {console.log(`likes ${likes}`)}

// let user_like_hashtag = user.likes.map((like)=>{
//     return `#${likes}`

// })

let cart = {
    items:[],

    add: function(item)
    {
        this.items.push(item)
    },

    addMany: function(itemlist)
    {
        this.items.push(itemlist);
    },
    
    delete:function(item)
    {
        this.items.pop(item)
    },

    all : function(item)
    {
        this.items
    },

    itemsExist:function(item)
    {
         this.items.indexOf(item) > 1;
    },

    itemLength : function(item)
    {
        this.items.length;
    }
}
cart.add('mangoes');
console.log(cart.items)