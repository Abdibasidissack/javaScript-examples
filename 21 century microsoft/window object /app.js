// WINDOW METHOD / OBJECT / PROPERTIES

// displaying the normal way but people reffer not to use window word
window.console.log(123); 

// alert

//window.alert('hello') // jsut prompt the user with a small box

//prompt

// const inout = prompt('enter anythin of your choice');
// alert(inout);

//confirm which is useful when deleting

// if (window.confirm('are you sure'))
// {
//     window.console.log('YES ');}
//     else{
//         window.console.log('no')
//     }

let val;

//getting the height of the window page 
// for intereactice urpose 

// outer height
val = window.outerHeight;  
val = window.outerWidth; 

//inner heights
val = window.innerHeight;
val = window.innerWidth;

//getting scroll points
val = window.scrollY; // y is vertical one 
val = window.scrollX; // x is horizontal

//location objects
val = window.location; // showing everything
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect the person to another site
        //val = window.location.href = 'www.google.com';

//reload
        //val = window.location.reload;


// History object
   //val = window.history.go(-1); // anythin writen within the parameter it bring the previous
// val = window.history.length; //checking the ;ength

// navigator objject
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

window.console.log(val)