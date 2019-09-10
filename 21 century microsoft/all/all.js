// this file consits of everything done

// data types 
    // [1] strings
        let a = 'all';
        console.log('String');

    // [2] numbers
        let b = 5;
        console.log(b);

    // [3] null
        let c = null;
        console.log(c);

    // [4] undefined
        let d;
        console.log(d);

    // [5] Array / list
        let e = [1,2,3,4,5];
        console.log(e);

            // manipulating an array

            // calling specific element
                console.log(' my favorite number is : '+e[0]);

            // adding a number at the end 
                e.push(6);
                console.log('the number 6 is added ' + e);

            // adding a number at the infront 
                e.unshift(7);
                console.log(e)

            // deleting the first item in an array
                e.shift();
                console.log(e);

            // delering the last element from an array
                e.pop();
                console.log(e);
            
            // joining two array element 
                let names = ['james','john','Andy'];
                
                    // first method 
                        e = e.concat(names);
                        console.log(e);

            // removing some parts 
                e.splice(2,4);
                console.log(e);

            // getting the length of an array
                console.log(e.length);

            // reversing the array element
                console.log(e.reverse());

            // removes only specific thing from element not like splice
                console.log(e.slice(0,4)); // manipulated for filter
            
// filtering element that have letter 'A'
console.log(e.filter);

            // sorting in alphabetial or numbers
                console.log(e.sort());
    // [6] object
        let f = {
            name :'John',
            age : 20
        }; 
        console.log(f);

            // Manipulation of Objects

                // calling specific thing within a function
                    console.log(f.name);
                
                // calling an atribute within a function
                    function AppFactory()
                    {
                        var person1 = 
                        {
                            name : 'Sebastian',
                            job : 'Software'
                        }
                    }
        