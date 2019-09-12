// object oriented programming consist of constructor and using .this 


// below is object literals when creating only one object
// const abdi = {
//     name:'abdi',
//     age: 30
// }

// console.log(abdi.name)
// console.log(abdi.age)

// creating constructor

         // function Person(name)
         // {
         //    this.name = name
         // }
         // const  Ali = new Person( 'Abdi');
         // const james = new Person('james')
         // console.log(james)
         // //console.log(Ali.name)

// trying my luck
function users(new_name,new_age,dob) {
   this.name = new_name;
   this.age = new_age;
   this.address = (param1,param2)=>
   {
      this.place = param1;
      this.street = param2;
   }
   this.birthday = new Date(dob);
   this.calculate_age = ()=>
   {
      const difference = Date.now() - this.birthday.getTime();
      const age_date = new Date(difference);
      return Math.abs(age_date.getUTCFullYear() - 1990)
   }

   
}

// creating an object . we need to ass this to the funcrion property
let output = new users('ali',20);
output.address('mombasa','kisumu')

console.log(output.calculate_age(12))
