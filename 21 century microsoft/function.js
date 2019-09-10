// console.log("Welcome to my calc")

// let sum = (num1,num2)=>{
//     return num1+num2;
// }
// let substruction = (num1, num2)=>{
//     return num1-num2;
// }
// let x = prompt("press 1 for sum and 2 for minus")
// if( x === 1){
//     let y,z = prompt("enter two numbers separate by , ");
//     sum(x,y);
// }



function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    return temp;
  }
  console.log(JSClock());